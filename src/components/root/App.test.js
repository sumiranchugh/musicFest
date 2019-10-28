import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("<App />", () => {
  let wrapper;
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState");
  // useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = act(() => shallow(<App />));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("empty List", () => {
    it("state is empty map", () => {
      expect(wrapper.state()).equals({ labels: new Map(), fests: new Map() });
    });
  });
});
