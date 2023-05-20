"use strict";
function createProcessorIntel(processor) {
    console.log(`
    --------
    Terima kasih ${processor.brand}
    --------
    anda telah berhasil membuat processor dengan detail berikut:

    base model: ${processor.baseModel}
    model name: ${processor.modelName}
    kecepatan : ${processor.clockSize}
    turbo boost: ${processor.turboBoost}
    core total: ${processor.coreTotal}
    threed total : ${processor.threedTotal}
  `);
}
function createProcessorAmd(processor) {
    var _a;
    console.log(`
    --------
    Terima kasih ${processor.brand}
    --------
    anda telah berhasil membuat processor dengan detail berikut:

    base model: ${processor.baseModel}
    model name: ${processor.modelName}
    kecepatan : ${processor.clockSize}
    precision boost: ${(_a = processor.precisionBoost) !== null && _a !== void 0 ? _a : "tidak ada"}
    core total: ${processor.coreTotal}
    threed total : ${processor.threedTotal}
    `);
}
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "Core I5",
    modelName: "11350F",
    clockSize: 2.8,
    turboBoost: false,
    coreTotal: 6,
    threedTotal: 6,
};
const AmdRyzen5 = {
    brand: "AMD",
    baseModel: "Ryzen 5",
    modelName: "5600x",
    clockSize: 4,
    precisionBoost: true,
    coreTotal: 8,
    threedTotal: 12,
};
const AmdRyzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "1300",
    clockSize: 3.7,
    coreTotal: 4,
    threedTotal: 4,
};
createProcessorIntel(intelCoreI5);
createProcessorAmd(AmdRyzen5);
createProcessorAmd(AmdRyzen3);
