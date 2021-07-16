import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { validationService } from "data/services/ValidationService";
import { ApiService } from "data/services/apiService";

export default function useIndex() {
  const [cep, setcep] = useState(""),
    cepValido = useMemo(() => {
      return validationService.cep(cep);
    }, [cep]),
    [erro, seterro] = useState(""),
    [buscafeita, setbuscafeita] = useState(false),
    [carregando, setcarregando] = useState(false),
    [diaristas, setdiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setdiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setbuscafeita(false);
    setcarregando(true);
    seterro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diarista: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setdiaristas(data.diaristas);
      setdiaristasRestantes(data.quantidade_diarista);
      setbuscafeita(true);
      setcarregando(false);
    } catch (error) {
      seterro("CEP não encontrado");
      setcarregando(false);
    }

    setbuscafeita(true);
  }

  return {
    cep,
    setcep,
    cepValido,
    erro,
    buscarProfissionais,
    diaristas,
    buscafeita,
    carregando,
    diaristasRestantes,
  };
}
