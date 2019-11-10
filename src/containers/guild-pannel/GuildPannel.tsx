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

  const setSelectedGuildHandler: Function = React.useCallback(
    (GuildID: string): void => {
      setSelectedGuild(GuildID);
    },
    []
  );

  const [isLoading, setIsLoading] = React.useState<Boolean>(true);

  const [loadedGuild, setGuild] = React.useState<IGuild>({
    id: "1",
    name: "No Servers Found",
    icon: "",
    memberCount: 0
  });

  // get guilds list
  React.useEffect((): void => {
    Api<SimpleGuild[]>("/api/guilds")
      .then(servers => {
        console.log(servers);
        setGuilds(servers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Load selectd guild
  React.useEffect((): void => {
    if (selectedGuild.length === 0) {
      return;
    }
    console.log("Loading selected Guild");
    setIsLoading(true);
    Api<IGuild>(`/api/guild/${selectedGuild}`)
      .then(guild => {
        setGuild(guild);
      })
      .catch(error => {
        console.log(error);
      });
    setIsLoading(false);
  }, [selectedGuild]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="sidenav">
          <GuildItemList
            guilds={loadedGuilds}
            setSelectedGuild={setSelectedGuildHandler}
          />
        </div>
        {isLoading ? <Guild {...loadedGuild} /> : Loader}
      </header>
    </div>
  );
};

export default GuildPannel;
