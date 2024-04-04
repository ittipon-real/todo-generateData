export interface User {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     Gender;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  Date;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   EyeColor;
    hair:       Hair;
    domain:     string;
    ip:         string;
    address:    Address;
    macAddress: string;
    university: string;
    bank:       Bank;
    company:    Company;
    ein:        string;
    ssn:        string;
    userAgent:  string;
    crypto:     Crypto;
}

export interface Address {
    address:     string;
    city?:       string;
    coordinates: Coordinates;
    postalCode:  string;
    state:       string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType:   string;
    currency:   string;
    iban:       string;
}

export interface Company {
    address:    Address;
    department: string;
    name:       string;
    title:      string;
}

export interface Crypto {
    coin:    Coin;
    wallet:  Wallet;
    network: Network;
}

export enum Coin {
    Bitcoin = "Bitcoin",
}

export enum Network {
    EthereumERC20 = "Ethereum (ERC20)",
}

export enum Wallet {
    The0Xb9Fc1004Bfe7702De522516Cf34A5Da41C4Ef2B5 = "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
    The0Xb9Fc2Fe63B2A6C003F1C324C3Bfa53259162181A = "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    The0Xb9Fc4B4B855Bc44Eb30D5E36Fd18F491F44A15B7 = "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
    The0Xb9Fe6979A82Fb43Fdd9Ba9F446846Dc4Dfca3Deb = "0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb",
}

export enum EyeColor {
    Amber = "Amber",
    Blue = "Blue",
    Brown = "Brown",
    Gray = "Gray",
    Green = "Green",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export interface Hair {
    color: HairColor;
    type:  HairType;
}

export enum HairColor {
    Auburn = "Auburn",
    Black = "Black",
    Blond = "Blond",
    Brown = "Brown",
    Chestnut = "Chestnut",
}

export enum HairType {
    Curly = "Curly",
    Straight = "Straight",
    Strands = "Strands",
    VeryCurly = "Very curly",
    Wavy = "Wavy",
}


export interface UserSummary {
    [department : string]: Department;
}

export interface Department {
    male:        number;
    female:      number;
    ageRange:    string;
    hair:        SummaryHair;
    addressUser: AddressUser;
}

export interface AddressUser {
    [name : string]: string;
}

export interface SummaryHair {
    [color : string]:  number;
}

export interface ProcessPeriod{
    start?: number;
    end?: number;
}