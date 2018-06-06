import * as React from "react";

import { shallow, configure } from "enzyme";
import AirtableConfig from "../components/layouts/AirtableConfig";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<AirtableConfig />", () => {
    it("should render without throwing an error", () => {
        expect(shallow(<AirtableConfig />).contains(<h2 />)).toBe(true);
    });
});
