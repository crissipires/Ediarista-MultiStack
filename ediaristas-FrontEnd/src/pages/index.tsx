import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnviroment";
import PageTitle from "ui/components/data-display/page-title/PageTitle";
import UserInformation from "ui/components/feedback/Userinformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TestFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useindex.page";

export default function Home() {
  const {
    cep,
    setcep,
    cepValido,
    erro,
    buscarProfissionais,
    diaristas,
    buscafeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setcep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {buscafeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item,index) => {
                  return (
                    <UserInformation
                      key={index}                    
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputação}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography>
                    ....e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem "
                      : "profissional atende"}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissinal
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponivel em sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
