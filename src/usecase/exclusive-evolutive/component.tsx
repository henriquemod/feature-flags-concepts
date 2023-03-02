import { ComponentStable } from "./stable/component-stable";
import { ComponentDev } from "./development/component-dev";
import { Version } from "../useFlag";

interface IProps {
    version: Version;
}

export const Component = (props: IProps): JSX.Element => {
    if (props.version === "STABLE") {
        return <ComponentStable />
    } else {
        return <ComponentDev />
    }
};
