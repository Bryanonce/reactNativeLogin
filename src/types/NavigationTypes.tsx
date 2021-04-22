export type LoginStackNavigatorType  = {
    Loading: undefined,
    Login: undefined,
    DrawerNavigator: undefined
}

export type DrawerNavigatorType  = {
    Main: undefined,
    Menu: undefined
}

export type StackNavigatorType  = {
    Home: undefined,
    DashBoard: undefined,
    Payment: {cuentOrigen: string, cuentaBeneficiario: string, cantidad: number}
}