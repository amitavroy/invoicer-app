import { Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

const MainMenu = () => {
  const [currentMenu, setCurrentMenu] = useState("1");

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentMenu]}>
      <Menu.Item key={1} onClick={(event) => setCurrentMenu(event.key)}>
        <Link href={"/project"}>
          <a>Projects</a>
        </Link>
      </Menu.Item>
      <Menu.Item key={2} onClick={(event) => setCurrentMenu(event.key)}>
        <Link href={"/work-order"}>
          <a>Work orders</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default MainMenu;
