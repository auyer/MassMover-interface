import React from "react";
import Api from "../../helpers/api/api";
import GuildItemList from "../../components/guild-item-list/GuildItemList";
import Loader from "../../components/loader/Loader";
import { SimpleGuild } from "../../components/guild-item/GuildItem";
import Guild, { IGuild } from "../../components/guild/Guild";

export interface IGuildsPannelProps {}

const GuildPannel: React.FunctionComponent<IGuildsPannelProps> = props => {
  const [loadedGuilds, setGuilds] = React.useState<SimpleGuild[]>([
    { id: "0", name: "No Servers Found", icon: "", memberCount: 0 }
  ]);

  const [selectedGuild, setSelectedGuild] = React.useState<String>("");

  // const setSelectedGuildWrap:React.Dispatch<React.SetStateAction<String>> () =>{
  //   setSelectedGuild()
  // }

  const [isLoading, setIsLoading] = React.useState<Boolean>(true);

  const [loadedGuild, setGuild] = React.useState<IGuild>({
    id: "1",
    name: "No Servers Found",
    icon: "",
    memberCount: 0
  });

  React.useEffect((): void => {
    Api<SimpleGuild[]>("/api/guilds")
      .then(servers => {
        console.log(servers);
        setGuilds(servers);
        console.log(loadedGuilds);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  React.useEffect((): void => {
    if (selectedGuild.length == 0) {
      return;
    }
    console.log("Loading selected Guild");
    setIsLoading(true);
    console.log(isLoading);
    Api<IGuild>(`/api/guild/${loadedGuild.id}`)
      .then(guild => {
        setGuild(guild);
      })
      .catch(error => {
        console.log(error);
      });
    setIsLoading(false);
    console.log(isLoading);
  }, [selectedGuild]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="sidenav">
          <GuildItemList
            guilds={loadedGuilds}
            setSelectedGuild={setSelectedGuild}
          />
        </div>
        {isLoading ? <Guild {...loadedGuild} /> : Loader}
      </header>
    </div>
  );
};

export default GuildPannel;
