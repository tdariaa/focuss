export enum CategoriesName {
  "resolution" = "Разрешение",
  // "focalLength" = "Фокусное расстояние",
  "microphone" = "Микрофон",
  "dynamic" = "Динамик",
  "memoryСard" = "Поддержка карты памяти",
  // "wifi" = "Wi-Fi",
  "price" = "Цена",
}

export enum AllCatigoriesName {
  "title" = "Наименование модели",
  "price" = "Цена",
  "enclosure" = "Корпус",
  "resolution" = "Разрешение",
  "focalLength" = "Фокусное расстояние",
  "microphone" = "Микрофон",
  "dynamic" = "Динамик",
  "memoryСard" = "Поддержка карты памяти",
  // "wifi" = "Wi-Fi",
  "description" = "Описание",
}

export function getEnumKeys<T>(enumObj: T): Array<keyof T> {
  return Object.keys(enumObj as Object) as Array<keyof T>;
}

export const allCategoriesArray = getEnumKeys(AllCatigoriesName);

export type ProductsDataType = {
  id: string;
  categories: string;
  title: string;
  description?: string;
  price: string;
  enclosure?: string;
  resolution: string;
  focalLength?: string;
  microphone: string;
  dynamic: string;
  memoryСard?: string;
  // wifi: string;
  mainImage: string;
  manual: string;
  userManual: string;
  galleryImage: Array<string>;
};

export const productsData: ProductsDataType[] = [
  {
    id: "0",
    categories: "outdoor",
    title: "FC-B4WFH-36-M",
    description:
      "Цилиндрическая Wi-Fi IP камера со встроенным микрофоном и поддержкой Micro SD-карт.",
    price: "8710 руб.",
    enclosure: "Металлический, степень пылевлагозащиты IP67",
    resolution: "4MP", // Разрешение
    focalLength: "3.6mm", // Фокусное расстояние
    microphone: "да", // микрофон
    dynamic: "нет", // Динамик
    // memoryСard: "поддерживает", // поддержка карты памяти
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "да",
    mainImage: "FC-B4WFH-36-M.png", // основное изображение
    galleryImage: ["FRONT.png", "BACK.png", "FC-B4WFH-36-M.png"], // изображения для галереи
    manual:
      "https://app.koofr.net/content/links/e961f8ae-ec73-4a0a-8210-b63fde38531c/files/get/B4WFHspec.pdf?path=%2F&force", // наименование мануала
    userManual:
      "https://app.koofr.net/content/links/bc849ee0-c0db-4579-ad45-7339d85bbbec/files/get/B4WFHmanual.pdf?path=%2F&forc", // руководство пользователя
  },
  {
    id: "1",
    categories: "outdoor",
    title: "FC-B4FH-28-M",
    description: "Цилиндрическая IP-камера со встроенным микрофоном.",
    price: "3770 руб.",
    enclosure: "Пластиковый, степень пылевлагозащиты IP66",
    resolution: "4MP",
    focalLength:
      "2.8 mm, horizontal FOV 95°, vertical FOV 53°, diagonal FOV 114° 3.6 mm, horizontal FOV 73°, vertical FOV 40°, diagonal FOV 88° 6 mm, horizontal FOV 48°, vertical FOV 27°, diagonal FOV 55°",
    microphone: "да",
    dynamic: "нет",
    memoryСard: "нет",
    // wifi: "нет",
    mainImage: "FC-B4FH-28-M.png",
    galleryImage: [
      "FC-B4FH-28-M BACK.png",
      "FC-B4FH-28-M FRONT.png",
      "FC-B4FH-28-M.png",
    ],
    manual:
      "https://app.koofr.net/content/links/95bb50c7-f237-45bf-afb5-302321e8103b/files/get/B4FHspec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/923df8d3-22bd-47a8-a48b-130bda945414/files/get/B4FHmanual.pdf?path=%2F&force",
  },
  {
    id: "2",
    categories: "outdoor",
    title: "FC-D4FH-28-M",
    description: "Купольная IP-камера со встроенным микрофоном.",
    price: "3510 руб.",
    enclosure: "Пластиковый",
    resolution: "4MP",
    focalLength:
      "Фиксированное фокусное расстояние, 2.8, 3.6 и 6mm опционально",
    microphone: "да",
    dynamic: "нет",
    memoryСard: "нет",
    // wifi: "да",
    mainImage: "FC-D4FH-28-M.png",
    galleryImage: [
      "FC-D4FH-28-M back.png",
      "FC-D4FH-28-M TOP.png",
      "FC-D4FH-28-M.png",
    ],
    manual:
      "https://app.koofr.net/content/links/a3e27c0a-93aa-4beb-8968-e8788ce0e936/files/get/D4FHspec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/62408cf5-db17-4afa-b1ee-1267d1f85b2a/files/get/D4FHmanual.pdf?path=%2F&force",
  },
  {
    id: "3",
    categories: "outdoor",
    title: "Х83",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей и поддержкой Micro SD-карт.",
    price: "9718 руб.",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "2MP",
    focalLength: "2.8mm F2.0",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi(IEEE802.11b/g/n)",
    // wifi: "да",
    mainImage: "X83 FRONT.png",
    galleryImage: ["X83 FRONT.png", "X83.png"],
    manual:
      "https://app.koofr.net/content/links/5eddc4aa-098c-4dbd-91ed-1753a660828e/files/get/Х83spec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/546d7a58-c5c0-43e8-9be2-fcb112056875/files/get/X83manual.pdf?path=%2F&force",
  },
  {
    id: "4",
    categories: "outdoor",
    title: "Х85-SP",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей, поддержкой Micro SD-карт и поворотно-наклонным механизмом. В комплекте солнечная панель.",
    price: "17843 руб.",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "3MP",
    focalLength: "3.2mm F2.2",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi(IEEE802.11b/g/n)",
    // wifi: "да",
    mainImage: "X85.png",
    galleryImage: ["X85.png", "SP.png"],
    manual:
      "https://app.koofr.net/content/links/72b04a2b-762a-45a4-9eee-c5231ded7cf8/files/get/Х85SPspec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/2ed1c4e7-2BF2-4deb-a128-ac00df660a79/files/get/X85manual.pdf?path=%2F&force",
  },
  {
    id: "5",
    categories: "outdoor",
    title: "Х85",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей, поддержкой Micro SD-карт и поворотно-наклонным механизмом.",
    price: "15568 руб.",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "3MP",
    focalLength: "3.2mm F2.2",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi (IEEE802.11b/g/n)",
    // wifi: "да",
    mainImage: "X85.png",
    galleryImage: ["X85.png", "X85 BACK.png", "X85 SIDE.png"],
    manual:
      "https://app.koofr.net/content/links/bb7fb6c7-d5f1-486a-a09c-244249754baf/files/get/Х85spec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/2ed1c4e7-2BF2-4deb-a128-ac00df660a79/files/get/X85manual.pdf?path=%2F&force",
  },
  {
    id: "8",
    categories: "outdoor",
    title: "Х87-SP",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей и поддержкой Micro SD-карт. В комплекте солнечная панель.",
    price: "17518 руб.",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "4MP",
    focalLength: "2.97mm F1.6",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi (IEEE802.11b/g/n)",
    // wifi: "да",
    mainImage: "x_87.png",
    galleryImage: ["SP.png", "x_87.png"],
    manual:
      "https://app.koofr.net/content/links/92ac0535-9a30-4dd3-8680-6128edb1a36a/files/get/Х87SPspec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/f5f9296f-23bc-41fc-aad2-aa150d8ac9f8/files/get/X87manual.pdf?path=%2F&force",
  },
  {
    id: "7",
    categories: "equipment",
    title: "FC-NVR9-S1",
    // description: "9-канальный сетевой видеорегистратор",
    price: "4518 руб.",
    // enclosure: "enclosure",
    resolution:
      "4k(3840×2160),5MP(2592×1944),4MP(2688×1520/2560×1440),3MP(2048×1536),1080P(1920×1080),960P(1280x960),720P(1280×720),D1 (720×576/720×480)",
    // focalLength: "???",
    microphone: "нет",
    dynamic: "нет",
    // memoryСard: "поддерживает",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "да",
    mainImage: "FC-NVR9-S1.png",
    galleryImage: ["FC-NVR9-S1.png", "NVR3009S1 backside.png"],
    manual:
      "https://app.koofr.net/content/links/722bfbe2-852b-4c11-b6ba-d6d903a82cc9/files/get/NVR9spec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/7255b3cc-806d-4495-9e43-d243108e1089/files/get/NVR9manual.pdf?path=%2F&force",
  },
  {
    id: "6",
    categories: "outdoor",
    title: "Х86",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей, поддержкой Micro SD-карт и магнитным креплением на стену.",
    price: "13325 руб",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "4MP",
    focalLength: "2.6mm F1.6",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi(IEEE802.11b/g/n)",
    // wifi: "да",
    mainImage: "x_86.png",
    galleryImage: ["x_86.png", "X86 BACK.png"],
    manual:
      "https://app.koofr.net/content/links/5201241e-f8f7-46a6-a3f6-b6cc1a040557/files/get/Х86spec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/e4b3f1bf-2ecd-4d56-9def-d4d248e073d5/files/get/X86manual.pdf?path=%2F&force",
  },
  {
    id: "9",
    categories: "outdoor",
    title: "Х87",
    description:
      "Интеллектуальная Wi-Fi IP-камера со встроенной аккумуляторной батареей и поддержкой Micro SD-карт",
    price: "15243 руб.",
    enclosure: "пластиковый, степень пылевлагозащиты IP65",
    resolution: "4MP",
    focalLength: "2.97mm F1.6",
    microphone: "да",
    dynamic: "да",
    // memoryСard: "micro sd card slot (до 128 ГБ)",
    memoryСard: "поддержка 1 Sata Hdf 8Тб",
    // wifi: "Wi-Fi(IEEE802.11b/g/n",
    // wifi: "да",
    mainImage: "x_87.png",
    galleryImage: ["x_87.png", "Х87 FRONT.png", "X87 BACK.png"],
    manual:
      "https://app.koofr.net/content/links/041a6f61-f834-4c80-9b27-1429b4bcdb25/files/get/Х87spec.pdf?path=%2F&force",
    userManual:
      "https://app.koofr.net/content/links/f5f9296f-23bc-41fc-aad2-aa150d8ac9f8/files/get/X87manual.pdf?path=%2F&force",
  },
];
