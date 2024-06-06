async function getproducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getproducts()

//same using arrow functions

const getproductsarrow = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products/1");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
}

getproductsarrow()
