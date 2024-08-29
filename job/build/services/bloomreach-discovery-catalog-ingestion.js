"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloomreachDiscoveryCatalogIngestion = void 0;
const bottleneck_1 = __importDefault(require("bottleneck"));
const logger_utils_1 = require("../utils/logger.utils");
const create_client_1 = require("../client/create.client");
const config_utils_1 = require("../utils/config.utils");
function bloomreachDiscoveryCatalogIngestion() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        logger_utils_1.logger.info('Service called! > bloomreachDiscoveryCatalogIngestion');
        const { bloomreachDiscoveryAccountId, bloomreachDiscoveryCatalogLocale: locale, bloomreachDiscoveryApiKey, bloomreachDiscoveryDomainKey, } = (0, config_utils_1.readConfiguration)();
        let _lastId = null;
        let _continue = true;
        const products = [];
        const limit = 3;
        const apiRoot = (0, create_client_1.createApiRoot)();
        const limiter = new bottleneck_1.default({
            maxConcurrent: 1,
            minTime: 300,
        });
        const getProducts = limiter.wrap((params) => __awaiter(this, void 0, void 0, function* () {
            return yield apiRoot
                .products()
                .get({
                queryArgs: {
                    limit: params.limit,
                    withTotal: false,
                    sort: 'id',
                    where: params.lastId ? `id > "${params.lastId}"` : undefined,
                    expand: 'masterData.current.categories[*].ancestors[*]'
                },
            })
                .execute();
        }));
        // https://docs.commercetools.com/api/general-concepts#iterating-over-all-elements
        while (_continue) {
            let response = null;
            if (_lastId === null) {
                response = yield getProducts({ limit });
            }
            else {
                response = yield getProducts({ limit, lastId: _lastId });
            }
            const data = (_a = response === null || response === void 0 ? void 0 : response.body.results.map((product) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
                return {
                    op: 'add',
                    path: `/products/${product.key}`,
                    value: {
                        attributes: {
                            title: (_a = product.masterData.current.name[locale]) !== null && _a !== void 0 ? _a : '',
                            sku: (_b = product.masterData.current.masterVariant.sku) !== null && _b !== void 0 ? _b : '',
                            description: (_d = (_c = product.masterData.current.description) === null || _c === void 0 ? void 0 : _c[locale]) !== null && _d !== void 0 ? _d : '',
                            slug: (_e = product.masterData.current.slug[locale]) !== null && _e !== void 0 ? _e : '',
                            price: (_h = (_g = (_f = product.masterData.current.masterVariant.prices) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.value.centAmount) !== null && _h !== void 0 ? _h : 0,
                            image: (_l = (_k = (_j = product.masterData.current.masterVariant.images) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.url) !== null && _l !== void 0 ? _l : '',
                            thumb_image: (_p = (_o = (_m = product.masterData.current.masterVariant.images) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.url) !== null && _p !== void 0 ? _p : '',
                            url: 'www.example.com',
                            //              category_paths: [[{"id":"999","name":"default"}]],
                            category_paths: getCategoryTree(product.masterData.current.categories),
                            brand: 'acme'
                        },
                        variants: getVariants(product),
                        views: getProductViews(product),
                    },
                };
            })) !== null && _a !== void 0 ? _a : [];
            products.push(...data);
            if (products.length >= ((_b = response === null || response === void 0 ? void 0 : response.body.total) !== null && _b !== void 0 ? _b : 0)) {
                _continue = false;
            }
            _continue = (response === null || response === void 0 ? void 0 : response.body.results.length) == limit;
            _lastId =
                (_d = (_c = response === null || response === void 0 ? void 0 : response.body.results[response.body.results.length - 1]) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : null;
        }
        const res = yield fetch(`https://api.connect.bloomreach.com/dataconnect/api/v1/accounts/${bloomreachDiscoveryAccountId}/catalogs/${bloomreachDiscoveryDomainKey}/products`, {
            // method: 'PUT',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json-patch+json',
                Authorization: `Bearer ${bloomreachDiscoveryApiKey}`,
            },
            body: JSON.stringify(products),
        });
        const data = yield res.json();
        return data;
    });
}
exports.bloomreachDiscoveryCatalogIngestion = bloomreachDiscoveryCatalogIngestion;
function getProductViews(product) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const views = {};
    const locales = product.masterData.current.name;
    for (const view in locales) {
        views[view] = {
            attributes: {
                title: (_a = product.masterData.current.name[view]) !== null && _a !== void 0 ? _a : '',
                sku: (_b = product.masterData.current.masterVariant.sku) !== null && _b !== void 0 ? _b : '',
                description: (_d = (_c = product.masterData.current.description) === null || _c === void 0 ? void 0 : _c[view]) !== null && _d !== void 0 ? _d : '',
                slug: (_e = product.masterData.current.slug[view]) !== null && _e !== void 0 ? _e : '',
                price: (_h = (_g = (_f = product.masterData.current.masterVariant.prices) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.value.centAmount) !== null && _h !== void 0 ? _h : 0,
                image: (_l = (_k = (_j = product.masterData.current.masterVariant.images) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.url) !== null && _l !== void 0 ? _l : '',
            },
        };
    }
    return views;
}
function getVariants(product) {
    const variants = {};
    const languageCode = (0, config_utils_1.readConfiguration)().bloomreachDiscoveryCatalogLocale;
    product.masterData.current.variants.forEach((variant) => {
        var _a;
        const attributesMap = {};
        (_a = variant.attributes) === null || _a === void 0 ? void 0 : _a.forEach((attribute) => {
            // if (attribute.value?.key) {
            //   attributesMap[attribute.name] = attribute.value[readConfiguration().languageCode];
            // }
            if (attribute.value.hasOwnProperty(languageCode)) {
                attributesMap[attribute.name] = attribute.value[languageCode];
            }
            else {
                attributesMap[attribute.name] = attribute.value;
            }
        });
        variants[variant.id] = {
            attributes: Object.assign({}, attributesMap),
        };
    });
    return variants;
}
function getCategoryTree(categories) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _r, _s, _t, _v, _w, _x, _y;
    const brCategories = [];
    const langCode = (0, config_utils_1.readConfiguration)().bloomreachDiscoveryCatalogLocale;
    if (Array.isArray(categories) && categories.length !== 0) {
        brCategories[2] = {
            id: (_a = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _a === void 0 ? void 0 : _a.key,
            name: (_b = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _b === void 0 ? void 0 : _b.name[langCode],
            slug: (_r = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _r === void 0 ? void 0 : _r.slug[langCode]
        };
        brCategories[1] = {
            id: (_e = (_d = (_c = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _c === void 0 ? void 0 : _c.ancestors) === null || _d === void 0 ? void 0 : _d[1].obj) === null || _e === void 0 ? void 0 : _e.key,
            name: (_h = (_g = (_f = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _f === void 0 ? void 0 : _f.ancestors) === null || _g === void 0 ? void 0 : _g[1].obj) === null || _h === void 0 ? void 0 : _h.name[langCode],
            slug: (_v = (_t = (_s = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _s === void 0 ? void 0 : _s.ancestors) === null || _t === void 0 ? void 0 : _t[1].obj) === null || _v === void 0 ? void 0 : _v.slug[langCode]
        };
        brCategories[0] = {
            id: (_l = (_k = (_j = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _j === void 0 ? void 0 : _j.ancestors) === null || _k === void 0 ? void 0 : _k[0].obj) === null || _l === void 0 ? void 0 : _l.key,
            name: (_p = (_o = (_m = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _m === void 0 ? void 0 : _m.ancestors) === null || _o === void 0 ? void 0 : _o[0].obj) === null || _p === void 0 ? void 0 : _p.name[langCode],
            slug: (_y = (_x = (_w = categories === null || categories === void 0 ? void 0 : categories[0].obj) === null || _w === void 0 ? void 0 : _w.ancestors) === null || _x === void 0 ? void 0 : _x[0].obj) === null || _y === void 0 ? void 0 : _y.slug[langCode]
        };
    }
    return [brCategories];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvb21yZWFjaC1kaXNjb3ZlcnktY2F0YWxvZy1pbmdlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvYmxvb21yZWFjaC1kaXNjb3ZlcnktY2F0YWxvZy1pbmdlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQW9DO0FBT3BDLHdEQUErQztBQUMvQywyREFBd0Q7QUFDeEQsd0RBQTBEO0FBc0MxRCxTQUFzQixtQ0FBbUM7OztRQUN2RCxxQkFBTSxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sRUFDSiw0QkFBNEIsRUFDNUIsZ0NBQWdDLEVBQUUsTUFBTSxFQUN4Qyx5QkFBeUIsRUFDekIsNEJBQTRCLEdBQzdCLEdBQUcsSUFBQSxnQ0FBaUIsR0FBRSxDQUFDO1FBRXhCLElBQUksT0FBTyxHQUFrQixJQUFJLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLE1BQU0sUUFBUSxHQUF3QixFQUFFLENBQUM7UUFDekMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUEsNkJBQWEsR0FBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQVUsQ0FBQztZQUM3QixhQUFhLEVBQUUsQ0FBQztZQUNoQixPQUFPLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQztRQUVILE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQzlCLENBQU8sTUFBMEMsRUFBRSxFQUFFO1lBQ25ELE9BQU8sTUFBTSxPQUFPO2lCQUNqQixRQUFRLEVBQUU7aUJBQ1YsR0FBRyxDQUFDO2dCQUNILFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUs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