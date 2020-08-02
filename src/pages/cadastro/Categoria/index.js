import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://daflix.herokuapp.com/categorias';

    fetch(url)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          categoriasRepository.create({
            titulo: values.titulo,
            cor: values.cor,
            link_extra: {
              text: values.texto,
              url: values.url,
            },
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');
            });
          setCategorias([...categorias, values]);

          clearForm();
        }}
      >
        <FormField
          label="Nome"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <h3>Link extra da categoria</h3>
        <FormField
          label="Nome"
          type="text"
          name="texto"
          value={values.texto}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        {/* <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        /> */}

        <Button>Cadastrar</Button>
      </form>

      <h2>Categorias cadastradas:</h2>
      <ul>
        {categorias.map((categoria) => <li key={`${categoria.titulo}`}>{categoria.titulo}</li>)}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
