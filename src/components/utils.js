
export function group_by(raw, field, desc = false){

    //return a map of field name (status) and array of that field

    const fieldMap = new Map()

    raw.forEach(e => {
        const f = e[field]

        if (fieldMap.has(f)){
            fieldMap.get(f).push(e)
        }
        else {
            fieldMap.set(f, [e])
        }
    })

    const ascending = new Map([...fieldMap.entries()].sort());
    const descending = new Map([...ascending.entries()].reverse());

    return desc ? descending : ascending

}
