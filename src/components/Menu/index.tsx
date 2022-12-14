import * as Styled from "./styled";
import logo from "../../assets/loggos/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings";
  
}

const Menu = ({ path, }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    navigate("/");
  };

  return (
    <Styled.MenuContainer>
      <img alt="logo" src={logo} />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/homepage")}
            active={path === "home"}
          >
            
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/settings")}
            active={path === "settings"}
          >

            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuItemButton onClick={handleLogout}>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
