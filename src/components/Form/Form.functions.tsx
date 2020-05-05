import React from "react";
import { IForm } from "App/App.types";

export const getFormInput = (
  index: number,
  option: IForm,
  onChange: (index: number, value: string) => void
) => {
  let element = <div key={"form" + index} />;

  if (option.element === "input" && option.type === "text") {
    element = (
      <div key={"form" + index}>
        {option.label !== "" ? <label>{option.label}</label> : null}
        <input
          type="text"
          name={option.name}
          placeholder={
            "placeholder" in option
              ? option.placeholder
              : "optional" in option && option.optional
              ? ""
              : "Can't be empty"
          }
          value={option.value}
          onChange={({ target }) => onChange(index, target.value)}
        />
      </div>
    );
  } else if (option.element === "input" && option.type === "number") {
    element = (
      <div key={"form" + index}>
        {option.label !== "" ? <label>{option.label}</label> : null}
        <input
          type="text"
          name={option.name}
          placeholder={
            "placeholder" in option
              ? option.placeholder
              : "optional" in option && option.optional
              ? ""
              : "Can't be empty"
          }
          value={option.value}
          onChange={({ target }) => {
            if (/^[0-9]*$/.test(target.value)) {
              onChange(index, target.value);
            }
          }}
        />
      </div>
    );
  } else if (option.element === "select") {
    element = (
      <div key={"form" + index}>
        {option.label !== "" ? <label>{option.label}</label> : null}
        <select
          value={option.value}
          onChange={({ target }) => onChange(index, target.value)}>
          {option.options.map((item, i) => (
            <option key={"form-option" + i}>{item}</option>
          ))}
        </select>
      </div>
    );
  } else if (option.element === "radio") {
    element = (
      <div className="radio" key={"form" + index}>
        {option.label !== "" ? <label>{option.label}</label> : null}
        {option.options.map((item, i) => (
          <span key={"form-radio" + i}>
            <input
              type="radio"
              name={option.name + i}
              value={item}
              checked={item === option.value}
              onChange={({ target }) => onChange(index, target.value)}
            />{" "}
            {item}
          </span>
        ))}
      </div>
    );
  } else if (option.element === "checkbox") {
    element = (
      <div className="checkbox" key={"form" + index}>
        <input
          type="checkbox"
          name={option.name}
          checked={option.value}
          onChange={() => onChange(index, "")}
        />
        {option.label !== "" ? <label>{option.label}</label> : null}
      </div>
    );
  } else if (option.element === "textarea") {
    element = (
      <div key={"form" + index} className="textarea">
        {option.label !== "" ? <label>{option.label}</label> : null}
        <textarea
          name={option.name}
          rows={3}
          value={option.value}
          onChange={({ target }) => onChange(index, target.value)}
          placeholder={
            "placeholder" in option
              ? option.placeholder
              : "optional" in option && option.optional
              ? ""
              : "Can't be empty"
          }></textarea>
      </div>
    );
  }

  return element;
};
