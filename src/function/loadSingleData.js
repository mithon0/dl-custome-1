export const loadedProducts = async (id) => {
    const loadData = await fetch('../../public/data.json');
    const resData = await loadData.json();
    // console.log(resData);
    // console.log(id);
    const foundData = resData.find(rd => rd.id === parseInt(id));
    // console.log(foundData);
    return foundData;
}