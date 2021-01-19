import React, { useEffect, useState } from "react";
import { FiX, FiEdit2 } from "react-icons/fi";
import { Button, Modal } from "@material-ui/core";

import { Header, ConatinerSearch, ContainerCountry, Place } from "./styles";

import Logo from "../../assets/Lugares-1.png";
import api, { apiPlaces } from "../../services/api";

interface countryProps {
  name: string;
  code: string;
}

interface placesProps {
  id: number;
  country: string;
  local: string;
  meta: string;
}

const Home: React.FC = () => {
  const [country, setCountries] = useState<countryProps[]>();
  const [places, setPlaces] = useState<placesProps[]>();

  const [open, setOpen] = React.useState(false);

  const [local, setLocal] = useState("");
  const [meta, setMeta] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    api.get("/rest/v2/all").then(async (response) => {
      const temp = await response.data.map((data: any) => {
        return {
          name: data.name,
          code: data.alpha3Code,
        };
      });
      setCountries(temp);
    });

    apiPlaces.get("places").then((response) => {
      console.log(response.data);
      setPlaces(response.data);
    });
  }, []);

  function handleAdd() {
    const place = {
      country: selectedCountry,
      local: local,
      meta: meta,
    };

    try {
      apiPlaces.post("/places", place);

      alert("cadastrado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  function handleClickRemove(id: number) {
    try {
      alert("Deseja realmente excluir esta meta?");
    } catch (err) {
      console.log(err);
    }
    // apiPlaces.delete(`/places/${id}`);
  }

  function handleClickEdit(id: number) {
    apiPlaces.put(`/places/${id}`);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      

      <Header>
        <img src={Logo} alt="Logo" />
      </Header>

      <ConatinerSearch>
        <select
          name="select-country"
          id=""
          placeholder="Selecione..."
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>-</option>
          {country &&
            country.map((data: countryProps) => {
              return (
                <option key={data.code} value={data.code}>
                  {data.name}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          className="local"
          placeholder="Digite o local que deseja conhecer"
          onChange={(e) => setLocal(e.target.value)}
        />
        <input
          type="text"
          className="meta"
          placeholder="mês/ano"
          onChange={(e) => {
            setMeta(e.target.value);
          }}
        />
        <Button onClick={handleAdd}>Adicionar</Button>
      </ConatinerSearch>

      <ContainerCountry>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
        {places &&
          places.map((data) => {
            return (
              <Place key={data.id}>
                <div>
                  <img
                    src={`https://restcountries.eu/data/${String(
                      data.country
                    ).toLowerCase()}.svg`}
                    alt="Brasil"
                  />

                  <button>
                    <FiEdit2
                      size={20}
                      color="#868686"
                      onClick={() => {
                        handleOpen();
                      }}
                    />
                  </button>
                  <button>
                    <FiX
                      size={20}
                      color="#868686"
                      onClick={() => {
                        handleClickRemove(data.id);
                      }}
                    />
                  </button>
                </div>

                <h3>{data.country}</h3>
                <hr />
                <p>Local: {data.local}</p>
                <p>Meta: {data.meta}</p>
              </Place>
            );
          })}
      </ContainerCountry>
    </>
  );
};

export default Home;
