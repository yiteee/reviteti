import { Money } from "@styled-icons/boxicons-regular";
import {
    Home as HomeIcon,
    PlusCircle,
    Compass,
    Megaphone,
    Group,
    Cog,
    RightArrowCircle,
} from "@styled-icons/boxicons-solid";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import styles from "./Home.module.scss";
import "./snow.scss";
import { Text } from "preact-i18n";
import { useContext, useMemo } from "preact/hooks";

import { CategoryButton } from "@revoltchat/ui";

import { isTouchscreenDevice } from "../../lib/isTouchscreenDevice";

import { useApplicationState } from "../../mobx/State";

import { useIntermediate } from "../../context/intermediate/Intermediate";
import { AppContext } from "../../context/revoltjs/RevoltClient";

import wideSVG from "/assets/wide.svg";

import { PageHeader } from "../../components/ui/Header";

const Overlay = styled.div`
    display: grid;
    height: 100%;

    > * {
        grid-area: 1 / 1;
    }

    .content {
        z-index: 1;
    }
`;

export default observer(() => {
    const { openScreen } = useIntermediate();
    const client = useContext(AppContext);
    const state = useApplicationState();

    const seasonalTheme = state.settings.get("appearance:seasonal", true);
    const toggleSeasonalTheme = () =>
        state.settings.set("appearance:seasonal", !seasonalTheme);

    const isDecember = !isTouchscreenDevice && new Date().getMonth() === 11;
    const snowflakes = useMemo(() => {
        const flakes = [];

        // Disable outside of December
        if (!isDecember) return [];

        for (let i = 0; i < 15; i++) {
            flakes.push("❄️");
            flakes.push("❄");
        }

        for (let i = 0; i < 2; i++) {
            flakes.push("🎄");
            flakes.push("☃️");
            flakes.push("⛄");
        }

        return flakes;
    }, []);

    return (
        <div className={styles.home}>
            <Overlay>
                {seasonalTheme && (
                    <div className="snowfall">
                        {snowflakes.map((emoji, index) => (
                            <div key={index} className="snowflake">
                                {emoji}
                            </div>
                        ))}
                    </div>
                )}
                <div className="content">
                    <PageHeader icon={<HomeIcon size={24} />} withTransparency>
                        <Text id="app.navigation.tabs.home" />
                    </PageHeader>
                    <div className={styles.homeScreen}>
                        <h3>
                            Welcome to the
                            <br />
                            <strong>TOXI | Employee Center</strong>
                        </h3>
                        <div className={styles.actions}>
                            <a
                                onClick={() =>
                                    openScreen({
                                        id: "special_input",
                                        type: "create_group",
                                    })
                                }>
                                <CategoryButton
                                    action="chevron"
                                    icon={<PlusCircle size={32} />}
                                    description={
                                        <Text id="app.home.group_desc" />
                                    }>
                                    <Text id="app.home.group" />
                                </CategoryButton>
                            </a>

                            {client.servers.get(
                                "01F7ZSBSFHQ8TA81725KQCSDDP",
                            ) ? (
                                <Link to="/server/01F7ZSBSFHQ8TA81725KQCSDDP">
                                    <CategoryButton
                                        action="chevron"
                                        icon={<RightArrowCircle size={32} />}
                                        description={
                                            <Text id="app.home.goto-testers_desc" />
                                        }>
                                        <Text id="app.home.goto-testers" />
                                    </CategoryButton>
                                </Link>
                            ) : (
                                <Link to="/invite/Testers">
                                    <CategoryButton
                                        action="chevron"
                                        icon={<Group size={32} />}
                                        description={
                                            <Text id="app.home.join-testers_desc" />
                                        }>
                                        <Text id="app.home.join-testers" />
                                    </CategoryButton>
                                </Link>
                            )}
                            <Link to="/settings">
                                <CategoryButton
                                    action="chevron"
                                    description={
                                        <Text id="app.home.settings-tooltip" />
                                    }
                                    icon={<Cog size={32} />}>
                                    <Text id="app.home.settings" />
                                </CategoryButton>
                            </Link>
                        </div>
                        {isDecember && (
                            <a href="#" onClick={toggleSeasonalTheme}>
                                Turn {seasonalTheme ? "off" : "on"} homescreen
                                effects
                            </a>
                        )}
                    </div>
                </div>
            </Overlay>{" "}
        </div>
    );
});
