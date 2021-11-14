import variables from "./variable";

export function GetProducts(text, brand, color, arrangement, page) {
  return new Promise((resolve, reject) => {
    const search = `?text=${text}&brand=${brand}&color=${color}&arrangement=${arrangement}&pageNumber=${page}`;
    fetch(variables.baseUrl + "products" + search)
      .then((response) => {
        response
          .json()
          .then((data) => resolve(data))
          .catch((cErr) => reject(cErr));
      })
      .catch((err) => reject(err));
  });
}
