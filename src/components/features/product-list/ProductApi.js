export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    resolve({data});
  });
}
export function fetchProductsByFilters(filter,pagination) {
  let queryString = '';
  //TODO: on Sever we will support multi vlaues
  for(let key in filter){

    queryString+=`${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`https://dummyjson.com/products?limit=100&+${queryString}`);
    const data = await response.json();
    resolve({data});
  });
}


export function fetchCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch("https://dummyjson.com/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductByID(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    resolve({ data });
  });
}