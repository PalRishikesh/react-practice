function getImageUrl(name){
    console.log("ulti name:",`${name}`);
    return new URL(`../assets/product/${name}`,import.meta.url).href;
}

export {getImageUrl}