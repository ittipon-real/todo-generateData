import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AddressUser,
  Department,
  Gender,
  HairColor,
  ProcessPeriod,
  User,
  UserSummary,
} from "./interface";

const CreateDataFormAPI = () => {
  const [users, setUsers] = useState();
  const [generateData, setGenerateData] = useState<UserSummary>();
  const [period, setPeriod] = useState<ProcessPeriod>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const {
        data: { users },
      } = await axios.get("https://dummyjson.com/users");
      setUsers(users);
      generateNewData(users);
    } catch (error) {
      //
    }
  };

  const assignGender = (data: Department, key: keyof Department) => {
    if (data?.[key] === undefined) {
      data = Object.assign(data, { [key]: 1 });
    } else {
      switch (key) {
        case Gender.Female:
        case Gender.Male: {
          data[key] = data[key] + 1;
          break;
        }
        default:
          break;
      }
    }

    return data;
  };

  const assignAgeRange = (data: Department, age: number) => {
    if (data.ageRange === undefined) {
      data = Object.assign(data, { ageRange: `${age}-${age}` });
    } else {
      let min = parseInt(data.ageRange.split("-")[0]);
      let max = parseInt(data.ageRange.split("-")[1]);
      if (!isNaN(min) && age < min) min = age;
      if (!isNaN(max) && age > max) max = age;

      data = Object.assign(data, { ageRange: `${min}-${max}` });
    }

    return data;
  };

  const assignHair = (data: Department, hairColor: HairColor) => {
    if (data.hair?.[hairColor] === undefined) {
      data.hair = Object.assign(data.hair, { [hairColor]: 1 });
    } else {
      data.hair[hairColor] = data.hair[hairColor] + 1;
    }

    return data;
  };

  const assignAddress = (data: Department, address: AddressUser) => {
    if (data.addressUser === undefined) {
      data.addressUser = address;
    } else {
      data.addressUser = Object.assign(data.addressUser, address);
    }
    return data;
  };

  const generateNewData = (users: User[]) => {
    console.log("gen data", users.length);
    setPeriod({ start: performance.now() });
    let newData: UserSummary = {};
    for (let i = 0; i < users.length; i++) {
      const userElement = users[i];
      const department = userElement.company.department;
      const gender = userElement.gender;
      const age = userElement.age;
      const hairColor = userElement.hair.color;
      const address = {
        [userElement.firstName + "" + userElement.lastName]:
          userElement.address.postalCode,
      };

      if (newData?.[department] === undefined) {
        const newDepartment = {
          [department]: {
            [gender]: 1,
            ageRange: `${age}-${age}`,
            hair: {
              [hairColor]: 1,
            },
            addressUser: address,
          },
        };
        newData = Object.assign(newData, newDepartment);
      } else {
        let currentDepartment = newData?.[department];
        currentDepartment = assignGender(currentDepartment, gender);
        currentDepartment = assignHair(currentDepartment, hairColor);
        currentDepartment = assignAgeRange(currentDepartment, age);
        currentDepartment = assignAddress(currentDepartment, address);
      }
    }
    setPeriod((prev) => {
      if (prev) return Object.assign(prev, { end: performance.now() });
      else return { end: performance.now() };
    });
    setGenerateData(newData);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>start : {period?.start} </h2>
      <h2>end : {period?.end} </h2>

      {period?.start && period.end ? (
        <h2>took {period?.end - period?.start} milliseconds</h2>
      ) : null}

      <pre>{JSON.stringify(generateData, undefined, 2)}</pre>
    </div>
  );
};

export default CreateDataFormAPI;
