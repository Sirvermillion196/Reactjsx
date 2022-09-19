export const moedaKey = "moedas";


export const saveMoeda = (moeda)=>{
    let moedas = getMoedas();

    if(!Array.isArray(moedas)){
        moedas = [];
    }

    if(moedas.lenght==0){
        moeda.id = 1;
    }else{
       const maxId = Math.max.apply(Math, moedas.map(function(o) { return o.id; }))
        moeda.id=maxId+1;
    }

    

    moedas.push(moeda);

    localStorage.setItem(moedaKey,JSON.stringify(moedas))

}
export const deleteMoeda = (id)=>{
    const moedas = getMoedas();

  const  newMoedas = moedas.filter((moeda)=>moeda.id!==id);

  localStorage.setItem(moedaKey,JSON.stringify(newMoedas))
}

export const getMoeda =(id)=>{
    let moedas = getMoedas();
    return moedas.find((moeda)=>moeda.id===id);
}

export const saveEdit = (id,moeda)=>{
    const moedas = getMoedas();

    const moedaIndex = moedas.findIndex((moedaToEdit)=>moedaToEdit.id===id);

    moedas[moedaIndex].nome = moeda.nome;
    moedas[moedaIndex].paises = moeda.paises;

    localStorage.setItem(moedaKey,JSON.stringify(moedas));
}

export const getMoedas = ()=>{

    let moedas = JSON.parse(localStorage.getItem(moedaKey))

    if(typeof moedas === 'underfined' || moedas === null){
        return []
    }

    return moedas
}