var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveUsecase = exports.isEligible = exports.toReadable = exports.toScheduleSummary = exports.haircutPercentage = exports.issuerType = exports.maturityUpperBound = exports.maturityLowerBound = exports.assetTypeE = exports.securityType = exports.assetType = exports.assetCountryOfOrigin = exports.loadSample = void 0;
const fs = __importStar(require("fs"));
function loadSample(filename) {
    const jsonString = fs.readFileSync('ecs-json/' + filename, 'utf-8');
    return JSON.parse(jsonString);
}
exports.loadSample = loadSample;
/**
 * Assume we have no multiple cardinality for now - we probably need to deal with it
 */
function assetCountryOfOrigin(sample) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if ((_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.asset[0]) === null || _b === void 0 ? void 0 : _b.assetCountryOfOrigin) {
        return (_e = (_d = (_c = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _c === void 0 ? void 0 : _c.asset[0]) === null || _d === void 0 ? void 0 : _d.assetCountryOfOrigin[0]) === null || _e === void 0 ? void 0 : _e.value;
    }
    if ((_g = (_f = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _f === void 0 ? void 0 : _f.asset[0]) === null || _g === void 0 ? void 0 : _g.denominatedCurrency) {
        return (_k = (_j = (_h = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _h === void 0 ? void 0 : _h.asset[0]) === null || _j === void 0 ? void 0 : _j.denominatedCurrency[0]) === null || _k === void 0 ? void 0 : _k.value;
    }
}
exports.assetCountryOfOrigin = assetCountryOfOrigin;
function assetType(sample) {
    var _a, _b, _c;
    return (_c = (_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.asset[0]) === null || _b === void 0 ? void 0 : _b.collateralAssetType[0]) === null || _c === void 0 ? void 0 : _c.assetType[0];
}
exports.assetType = assetType;
function securityType(sample) {
    var _a, _b, _c, _d, _e, _f;
    if ((_c = (_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.asset[0]) === null || _b === void 0 ? void 0 : _b.collateralAssetType[0]) === null || _c === void 0 ? void 0 : _c.securityType)
        return (_f = (_e = (_d = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _d === void 0 ? void 0 : _d.asset[0]) === null || _e === void 0 ? void 0 : _e.collateralAssetType[0]) === null || _f === void 0 ? void 0 : _f.securityType[0];
    else {
        return '';
    }
}
exports.securityType = securityType;
function assetTypeE(sample) {
    return securityType(sample) + ' ' + assetType(sample);
}
exports.assetTypeE = assetTypeE;
function maturityLowerBound(sample) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.asset[0]) === null || _b === void 0 ? void 0 : _b.maturityRange) === null || _c === void 0 ? void 0 : _c.lowerBound) === null || _d === void 0 ? void 0 : _d.period) === null || _e === void 0 ? void 0 : _e.periodMultiplier;
}
exports.maturityLowerBound = maturityLowerBound;
function maturityUpperBound(sample) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.asset[0]) === null || _b === void 0 ? void 0 : _b.maturityRange) === null || _c === void 0 ? void 0 : _c.upperBound) === null || _d === void 0 ? void 0 : _d.period) === null || _e === void 0 ? void 0 : _e.periodMultiplier;
}
exports.maturityUpperBound = maturityUpperBound;
function issuerType(sample) {
    var _a, _b, _c, _d;
    if ((_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.issuer) {
        return (_d = (_c = (_b = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _b === void 0 ? void 0 : _b.issuer[0]) === null || _c === void 0 ? void 0 : _c.issuerType[0]) === null || _d === void 0 ? void 0 : _d.issuerType[0];
    }
    else {
        return '';
    }
}
exports.issuerType = issuerType;
function haircutPercentage(sample) {
    var _a, _b, _c;
    const pctSt = (_c = (_b = (_a = sample === null || sample === void 0 ? void 0 : sample.criteria[0]) === null || _a === void 0 ? void 0 : _a.treatment) === null || _b === void 0 ? void 0 : _b.valuationTreatment) === null || _c === void 0 ? void 0 : _c.haircutPercentage;
    var pct = +pctSt;
    return pct * 100 + '%';
}
exports.haircutPercentage = haircutPercentage;
function toScheduleSummary(sample) {
    return {
        assetCountryOfOrigin: assetCountryOfOrigin(sample),
        assetType: assetTypeE(sample),
        maturityLower: maturityLowerBound(sample),
        maturityUpper: maturityUpperBound(sample),
        issuerType: issuerType(sample),
        haircutPercentage: haircutPercentage(sample),
    };
}
exports.toScheduleSummary = toScheduleSummary;
function toReadable(sched) {
    let res;
    if (sched.maturityLower + '-' + sched.maturityUpper == 'NaN-NaN') {
        res = '';
    }
    else {
        res = sched.maturityLower + 'Y-' + sched.maturityUpper + 'Y';
    }
    return (sched.assetCountryOfOrigin +
        ' ' +
        sched.assetType +
        ' ' +
        res +
        ' ' +
        sched.issuerType +
        ' ' +
        sched.haircutPercentage);
}
exports.toReadable = toReadable;
const EU1515pct = loadSample('EU-1-5-15pct.JSON');
const US1510pct = loadSample('US-1-5-10pct.JSON');
const US154pctCorp = loadSample('US-1-5-4pct-Corp.JSON');
const USCash = loadSample('US-Cash.JSON');
const EU152pct = loadSample('EU-1-5-2pct.JSON');
const US152pct = loadSample('US-1-5-2pct.JSON');
const US154pct = loadSample('US-1-5-4pct.JSON');
const schedules = [
    EU1515pct,
    US1510pct,
    US154pctCorp,
    USCash,
    EU152pct,
    US152pct,
    US154pct,
].map(X => toScheduleSummary(X));
function isEligible(assetCountryOfOrigin, assetType, issuerType, maturity) {
    const isEligible = schedules
        .filter(loadedSchedule => loadedSchedule.assetCountryOfOrigin == assetCountryOfOrigin)
        .filter(loadedSchedule => loadedSchedule.assetType == assetType)
        .filter(loadedSchedule => !issuerType || loadedSchedule.issuerType == issuerType)
        .filter(loadedSchedule => !maturity || maturity < loadedSchedule.maturityUpper)
        .filter(loadedSchedule => !maturity || maturity > loadedSchedule.maturityLower);
    return isEligible;
}
exports.isEligible = isEligible;
function solveUsecase(assetCountryOfOrigin, assetType, issuerType, maturity) {
    const usecase1Answer = isEligible(assetCountryOfOrigin, assetType, issuerType, maturity);
    console.log('Q: Is an ' +
        assetCountryOfOrigin.toLowerCase().replace("_", " ") + ' ' + assetType.toLowerCase().replace("_", " ") + ' ' + (issuerType ? "issued by " + (issuerType === null || issuerType === void 0 ? void 0 : issuerType.toLowerCase().replace("_", " ")) : "") + ' with ' + maturity + ' years remaining maturity eligible?');
    console.log(usecase1Answer.length === 0 ? 'No' : 'Yes');
    if (usecase1Answer.length === 0) {
        console.log('A: No');
    }
    else {
        console.log('A: Yes');
        console.log('Q: If so, what are applicable haircuts?');
        usecase1Answer.map(x => console.log('A: ' + toReadable(x)));
    }
}
exports.solveUsecase = solveUsecase;
// schedules.forEach(x => console.log(toReadable(x)));
// console.log('use case 1');
// solveUsecase('EU', 'DEBT SECURITY', 'SOVEREIGN_CENTRAL_BANK', 4);
// console.log('use case 2');
// solveUsecase('JGB', 'DEBT SECURITY', 'SOVEREIGN_CENTRAL_BANK', 3);
// console.log('use case 3');
// solveUsecase('GBP', 'CASH', undefined, undefined);