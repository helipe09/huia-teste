import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import EstadoService from '../../services/getSigla';

import { Wrapper, Descricao } from './styles';

export default function Form() {
  const [sigla, setSigla] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(`CRM ${data.crm} cadastrado com sucesso`);

  useEffect(() => {
    EstadoService.get().then((results) => {
      setSigla(results.data);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>CRM</label>
            <input
              type="number"
              defaultValue="000000"
              {...register('crm', { required: true, minLength: 5 })}
            />
            {errors.crm?.type === 'minLength' && (
              <span>É obrigatório no mínimo 5 caracteres.</span>
            )}
          </div>
          <div>
            <label>UF</label>
            <select {...register('uf')}>
              <option>Selecione a UF</option>
              {sigla.map((item) => (
                <option defaultValue="000000" value={item.id}>
                  {item.sigla}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">
            <h3>CONTINUE</h3>
          </button>
        </form>
        <h4>CANAL DE COMPRAS EXCLUSIVO PARA CLASSE MÉDIA</h4>
        {/* <Descricao>
          <h3>CANAL DE COMPRAS EXCLUSIVO PARA CLASSE MÉDIA</h3>
        </Descricao> */}
      </Wrapper>
    </>
  );
}
