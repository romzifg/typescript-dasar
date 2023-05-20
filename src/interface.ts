type CoreCount = 2 | 4 | 6 | 8 | 12 | 18;
type CoreName = "DualCore" | "QuadCore" | "OctaCore" | "SuperCore";

type Core = CoreCount | CoreName;

interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSize: number;
  coreTotal: Core;
  threedTotal: Core;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost: boolean;
}

function createProcessorIntel(processor: Intel): void {
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

function createProcessorAmd(processor: AMD): void {
  console.log(`
    --------
    Terima kasih ${processor.brand}
    --------
    anda telah berhasil membuat processor dengan detail berikut:

    base model: ${processor.baseModel}
    model name: ${processor.modelName}
    kecepatan : ${processor.clockSize}
    turbo boost: ${processor.precisionBoost}
    core total: ${processor.coreTotal}
    threed total : ${processor.threedTotal}
    `);
}

const intelCoreI5: Intel = {
  brand: "Intel",
  baseModel: "Core I5",
  modelName: "11350F",
  clockSize: 2.8,
  turboBoost: false,
  coreTotal: 6,
  threedTotal: 6,
};

const AmdRyzen5: AMD = {
  brand: "AMD",
  baseModel: "Ryzen 5",
  modelName: "5600x",
  clockSize: 4,
  precisionBoost: true,
  coreTotal: 8,
  threedTotal: 12,
};

createProcessorIntel(intelCoreI5);
createProcessorAmd(AmdRyzen5);
