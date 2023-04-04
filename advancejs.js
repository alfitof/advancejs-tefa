// ------------------------- NO 1 ----------------------------
let obj = {
  author: "John Red Doe",
  title: "Mr.RED has a red and a green car",
  images: {
    url: "https://dummy.com/red-image.jpg",
  },
};

function replaceString(value) {
  if (typeof value === "string") {
    return value.replace(/red/gi, "blue");
  } else if (typeof value === "object") {
    for (let key in value) {
      value[key] = replaceString(value[key]);
    }
  }
  return value;
}

obj = replaceString(obj);
console.log(obj);

// ------------------------- NO 2 ----------------------------
function hitungTotalGaji(obj) {
  let totalGaji = 0;

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((employee) => {
        totalGaji += employee.salary;
      });
    } else if (typeof obj[key] === "object") {
      totalGaji += hitungTotalGaji(obj[key]);
    }
  }
  return totalGaji;
}

// ------------------------- NO 3 ----------------------------
const urls = [
  "https://www.boredapi.com/api/activity",
  "https://www.boredapis.com/api/activity",
  "https://www.boredapis2.com/api/activity",
];

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => ({ error: "Gagal Fetching Data" }))
  )
)
  .then((responses) => {
    const validResponse = responses.find(
      (response) => !response.error && response.activity
    );

    if (validResponse) {
      const validUrl = urls[responses.indexOf(validResponse)];
      console.log({
        data: validResponse,
        url: validUrl,
      });
    } else {
      console.log("Tidak ditemukan URL yang sesuai");
    }
  })
  .catch((error) => console.log(error));

// ------------------------- NO 4 ----------------------------
function example() {
  function dummy() {
    return 2;
  }
  return dummy();
  function dummy() {
    return 5;
  }
}

console.log(example());

// ------------------------- NO 5 ----------------------------
class Car {
  constructor(namaBrand, tahunBuat, negaraBuat) {
    this.namaBrand = namaBrand;
    this.tahunBuat = tahunBuat;
    this.negaraBuat = negaraBuat;
  }
  hitungUmur() {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - this.tahunBuat;
  }
  isBuatanUS() {
    return this.negaraBuat === "US";
  }
}
const myCar = new Car("RX7", 2018, "Japan");

console.log(`Nama brand: ${myCar.namaBrand}`);
console.log(`Tahun pembuatan: ${myCar.tahunBuat}`);
console.log(`Negara pembuatan: ${myCar.negaraBuat}`);
console.log(`Umur mobil: ${myCar.hitungUmur()} tahun`);
console.log(`Apakah mobil tersebut dibuat di US: ${myCar.isBuatanUS()}`);
