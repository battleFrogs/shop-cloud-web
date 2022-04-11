export default {
    setKey(datasouce) {
        let i = 1;
        datasouce.forEach(element => {
            element['key'] = i++
        });
        return datasouce
    }
}