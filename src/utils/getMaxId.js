const getMaxId = (usuarios) => {
    const arrayNumbers = usuarios.map( usuario => usuario.id);
    console.log(arrayNumbers);
    return Math.max(...arrayNumbers);
}

export default getMaxId;