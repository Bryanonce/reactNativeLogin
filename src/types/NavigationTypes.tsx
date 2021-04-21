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
    DashBoard: undefined,
    Payment: {cuentOrigen: string, cuentaBeneficiario: string, cantidad: number}
}