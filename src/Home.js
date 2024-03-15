import Panel, { PanelWrapper, PanelFlx } from "./components/panel";
import WidgetProfile from "./components/widget/w_profil";

const tempList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Home() {
  return (
    <div className="main">
      <div className="skill-wrap">
        <PanelWrapper>
          <PanelFlx flex={'inherit'} width={400} height={320} padding={24} children={<WidgetProfile />} />
          <PanelFlx />
          <PanelFlx />
          <PanelFlx />
          <PanelFlx />

        </PanelWrapper>
      </div>
    </div>
  );
}

export default Home;
