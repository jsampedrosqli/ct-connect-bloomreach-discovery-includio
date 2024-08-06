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
exports.productDataEmpty = exports.productData = void 0;
const globals_1 = require("@jest/globals");
const jest_fetch_mock_1 = __importDefault(require("jest-fetch-mock"));
const bloomreach_discovery_catalog_ingestion_1 = require("./bloomreach-discovery-catalog-ingestion");
const create_client_1 = require("../client/create.client");
globals_1.jest.mock('../client/create.client');
globals_1.jest.mock('../utils/config.utils');
globals_1.jest.mock('../utils/config.utils', () => {
    return {
        readConfiguration: globals_1.jest.fn().mockReturnValue({
            clientId: 'mockClientId',
            clientSecret: 'mockClientSecret',
            projectKey: 'mockProjectKey',
            scope: 'manage_project:mockProjectKey view_products:mockProjectKey',
            region: 'mockRegion',
            bloomreachDiscoveryAccountId: 'mockAccountId',
            bloomreachDiscoveryAuthKey: 'mockAuthKey',
            bloomreachDiscoveryDomainKey: 'mockDomainKey',
            bloomreachDiscoveryApiKey: 'mockApiKey',
            bloomreachDiscoveryCatalogLocale: 'en-US',
        }),
    };
});
(0, globals_1.beforeEach)(() => {
    jest_fetch_mock_1.default.enableMocks();
    jest_fetch_mock_1.default.resetMocks();
    globals_1.jest.clearAllMocks();
});
(0, globals_1.describe)('testing bloomreachDiscoveryCatalogIngestion', () => {
    (0, globals_1.it)('should execute successfully with products from commercetools', () => __awaiter(void 0, void 0, void 0, function* () {
        //setup getProducts mock
        const mockExecute = globals_1.jest
            .fn()
            .mockResolvedValue({ body: exports.productData });
        create_client_1.createApiRoot.mockReturnValue({
            products: globals_1.jest.fn().mockReturnThis(),
            get: globals_1.jest.fn().mockReturnThis(),
            execute: mockExecute,
        });
        //PUT to bloomreach mock
        jest_fetch_mock_1.default.mockResponseOnce(JSON.stringify({ success: true }));
        const result = yield (0, bloomreach_discovery_catalog_ingestion_1.bloomreachDiscoveryCatalogIngestion)();
        (0, globals_1.expect)(result).toBeDefined();
    }));
    (0, globals_1.it)('should execute successfully with no products from commercetools', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = globals_1.jest
            .fn()
            .mockResolvedValue({ body: exports.productDataEmpty });
        create_client_1.createApiRoot.mockReturnValue({
            products: globals_1.jest.fn().mockReturnThis(),
            get: globals_1.jest.fn().mockReturnThis(),
            execute: mockExecute,
        });
        jest_fetch_mock_1.default.mockResponse(JSON.stringify({ success: true }));
        const result = yield (0, bloomreach_discovery_catalog_ingestion_1.bloomreachDiscoveryCatalogIngestion)();
        (0, globals_1.expect)(result).toBeDefined();
    }));
});
exports.productData = {
    limit: 20,
    offset: 0,
    count: 1,
    total: 1,
    results: [
        {
            id: 'e066a0c4-ea93-449f-8775-e45dd4f8d1f5',
            version: 28,
            versionModifiedAt: '2023-09-13T15:45:16.510Z',
            lastMessageSequenceNumber: 14,
            createdAt: '2022-09-14T22:03:18.948Z',
            lastModifiedAt: '2023-08-30T17:02:46.954Z',
            lastModifiedBy: {
                isPlatformClient: true,
            },
            createdBy: {
                clientId: 'ck1ibqsxjtdr7PkFLz61OLCw',
                isPlatformClient: false,
            },
            productType: {
                typeId: 'product-type',
                id: 'f2d332b0-23f4-482e-a869-bb59ee6c35b6',
            },
            masterData: {
                current: {
                    name: {
                        'en-US': 'sample name',
                        'en-CA': 'sample name',
                        'fr-CA': 'sample name',
                    },
                    description: {
                        'en-US': 'sample description',
                        'en-CA': 'sample description',
                        'fr-CA': 'sample description',
                    },
                    categories: [
                        {
                            typeId: 'category',
                            id: '1ada7ab0-839d-4a92-8439-5a417feb32a9',
                        },
                    ],
                    categoryOrderHints: {},
                    slug: {
                        'en-US': 'sample-slug',
                        'en-CA': 'sample-slug',
                        'fr-CA': 'sample-slug',
                    },
                    masterVariant: {
                        id: 1,
                        sku: 'sample-slug',
                        prices: [
                            {
                                id: 'a8cc6502-c285-4d5f-8459-038c6abcb3a3',
                                value: {
                                    type: 'centPrecision',
                                    currencyCode: 'USD',
                                    centAmount: 39900,
                                    fractionDigits: 2,
                                },
                            },
                            {
                                id: '049df840-2b05-443b-a1ba-88a068bbac52',
                                value: {
                                    type: 'centPrecision',
                                    currencyCode: 'CAD',
                                    centAmount: 30700,
                                    fractionDigits: 2,
                                },
                            },
                        ],
                        images: [
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                        ],
                        attributes: [
                            {
                                name: 'seller',
                                value: 'splash,manifold',
                            },
                            {
                                name: 'type',
                                value: 'accessories',
                            },
                            {
                                name: 'brand',
                                value: 'SAMPLE',
                            },
                            {
                                name: 'rating',
                                value: 1.8,
                            },
                            {
                                name: 'test5',
                                value: [
                                    {
                                        key: '3',
                                        label: '3',
                                    },
                                    {
                                        key: '1',
                                        label: '1',
                                    },
                                ],
                            },
                            {
                                name: 'test6',
                                value: {
                                    key: '1',
                                    label: '1',
                                },
                            },
                        ],
                        assets: [],
                        availability: {
                            isOnStock: true,
                            availableQuantity: 86,
                            version: 4,
                            id: 'fb552c65-5701-4164-8efc-ec7da122b232',
                            channels: {
                                '8dd606fb-4db2-4671-b8e4-a97dd444c677': {
                                    isOnStock: true,
                                    availableQuantity: 100,
                                    version: 1,
                                    id: '6c7060af-ed1d-438f-830c-85ca0d8fe642',
                                },
                                'c22ffb1e-ea4e-46a7-ac39-82d4a62d2171': {
                                    isOnStock: true,
                                    availableQuantity: 100,
                                    version: 1,
                                    id: 'da875f86-eb18-40ab-83ad-6112a1939365',
                                },
                            },
                        },
                    },
                    variants: [
                        {
                            id: 1,
                            sku: 'sample-slug',
                            prices: [
                                {
                                    id: 'a8cc6502-c285-4d5f-8459-038c6abcb3a3',
                                    value: {
                                        type: 'centPrecision',
                                        currencyCode: 'USD',
                                        centAmount: 39900,
                                        fractionDigits: 2,
                                    },
                                },
                                {
                                    id: '049df840-2b05-443b-a1ba-88a068bbac52',
                                    value: {
                                        type: 'centPrecision',
                                        currencyCode: 'CAD',
                                        centAmount: 30700,
                                        fractionDigits: 2,
                                    },
                                },
                            ],
                            images: [
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                                {
                                    url: 'https://sample.com/image.jpg',
                                    dimensions: {
                                        w: 715,
                                        h: 860,
                                    },
                                },
                            ],
                            attributes: [
                                {
                                    name: 'seller',
                                    value: 'splash,manifold',
                                },
                                {
                                    name: 'type',
                                    value: 'accessories',
                                },
                                {
                                    name: 'brand',
                                    value: 'SAMPLE',
                                },
                                {
                                    name: 'rating',
                                    value: 1.8,
                                },
                                {
                                    name: 'test5',
                                    value: [
                                        {
                                            key: '3',
                                            label: '3',
                                        },
                                        {
                                            key: '1',
                                            label: '1',
                                        },
                                    ],
                                },
                                {
                                    name: 'test6',
                                    value: {
                                        key: '1',
                                        label: '1',
                                    },
                                },
                            ],
                            assets: [],
                            availability: {
                                isOnStock: true,
                                availableQuantity: 86,
                                version: 4,
                                id: 'fb552c65-5701-4164-8efc-ec7da122b232',
                                channels: {
                                    '8dd606fb-4db2-4671-b8e4-a97dd444c677': {
                                        isOnStock: true,
                                        availableQuantity: 100,
                                        version: 1,
                                        id: '6c7060af-ed1d-438f-830c-85ca0d8fe642',
                                    },
                                    'c22ffb1e-ea4e-46a7-ac39-82d4a62d2171': {
                                        isOnStock: true,
                                        availableQuantity: 100,
                                        version: 1,
                                        id: 'da875f86-eb18-40ab-83ad-6112a1939365',
                                    },
                                },
                            },
                        },
                    ],
                    searchKeywords: {},
                },
                staged: {
                    name: {
                        'en-US': 'sample name',
                        'en-CA': 'sample name',
                        'fr-CA': 'sample name',
                    },
                    description: {
                        'en-US': 'sample description',
                        'en-CA': 'sample description',
                        'fr-CA': 'sample description',
                    },
                    categories: [
                        {
                            typeId: 'category',
                            id: '1ada7ab0-839d-4a92-8439-5a417feb32a9',
                        },
                    ],
                    categoryOrderHints: {},
                    slug: {
                        'en-US': 'sample-slug',
                        'en-CA': 'sample-slug',
                        'fr-CA': 'sample-slug',
                    },
                    masterVariant: {
                        id: 1,
                        sku: 'sample-slug',
                        prices: [
                            {
                                id: 'a8cc6502-c285-4d5f-8459-038c6abcb3a3',
                                value: {
                                    type: 'centPrecision',
                                    currencyCode: 'USD',
                                    centAmount: 39900,
                                    fractionDigits: 2,
                                },
                            },
                            {
                                id: '049df840-2b05-443b-a1ba-88a068bbac52',
                                value: {
                                    type: 'centPrecision',
                                    currencyCode: 'CAD',
                                    centAmount: 30700,
                                    fractionDigits: 2,
                                },
                            },
                        ],
                        images: [
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                            {
                                url: 'https://sample.com/image.jpg',
                                dimensions: {
                                    w: 715,
                                    h: 860,
                                },
                            },
                        ],
                        attributes: [
                            {
                                name: 'seller',
                                value: 'splash,manifold',
                            },
                            {
                                name: 'type',
                                value: 'accessories',
                            },
                            {
                                name: 'brand',
                                value: 'SAMPLE',
                            },
                            {
                                name: 'rating',
                                value: 1.8,
                            },
                        ],
                        assets: [],
                        availability: {
                            isOnStock: true,
                            availableQuantity: 86,
                            version: 4,
                            id: 'fb552c65-5701-4164-8efc-ec7da122b232',
                            channels: {
                                '8dd606fb-4db2-4671-b8e4-a97dd444c677': {
                                    isOnStock: true,
                                    availableQuantity: 100,
                                    version: 1,
                                    id: '6c7060af-ed1d-438f-830c-85ca0d8fe642',
                                },
                                'c22ffb1e-ea4e-46a7-ac39-82d4a62d2171': {
                                    isOnStock: true,
                                    availableQuantity: 100,
                                    version: 1,
                                    id: 'da875f86-eb18-40ab-83ad-6112a1939365',
                                },
                            },
                        },
                    },
                    variants: [],
                    searchKeywords: {},
                },
                published: true,
                hasStagedChanges: false,
            },
            key: 'sample-slug',
            taxCategory: {
                typeId: 'tax-category',
                id: 'aff4fe6e-acf2-4230-83fd-932e19fb9afa',
            },
            lastVariantId: 1,
        },
    ],
};
exports.productDataEmpty = {
    limit: 20,
    offset: 0,
    count: 0,
    total: 0,
    results: [],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvb21yZWFjaC1kaXNjb3ZlcnktY2F0YWxvZy1pbmdlc3Rpb24udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9ibG9vbXJlYWNoLWRpc2NvdmVyeS1jYXRhbG9nLWluZ2VzdGlvbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF1RTtBQUN2RSxzRUFBd0M7QUFDeEMscUdBQThGO0FBQzlGLDJEQUF1RDtBQUV2RCxjQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDckMsY0FBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRW5DLGNBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3RDLE9BQU87UUFDTCxpQkFBaUIsRUFBRSxjQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQzNDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFlBQVksRUFBRSxrQkFBa0I7WUFDaEMsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixLQUFLLEVBQUUsNERBQTREO1lBQ25FLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLDRCQUE0QixFQUFFLGVBQWU7WUFDN0MsMEJBQTBCLEVBQUUsYUFBYTtZQUN6Qyw0QkFBNEIsRUFBRSxlQUFlO1lBQzdDLHlCQUF5QixFQUFFLFlBQVk7WUFDdkMsZ0NBQWdDLEVBQUUsT0FBTztTQUMxQyxDQUFDO0tBQ0gsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxvQkFBVSxFQUFDLEdBQUcsRUFBRTtJQUNkLHlCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIseUJBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QixjQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGtCQUFRLEVBQUMsNkNBQTZDLEVBQUUsR0FB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