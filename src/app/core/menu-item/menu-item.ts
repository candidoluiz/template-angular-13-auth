import { Injectable } from "@angular/core";

export interface ISeparador {
    separador: string;
    menus: IMainMenu[];
}

export interface IMainMenu {
    nome: string;
    state: string          
    icon: string;
    filhos?: IChildrenItems[];   
}

export interface IChildrenItems {
    nome: string;
    target: string;   
    acesso?: string;
}


const MENUITEMS: ISeparador[] = [
    {
        separador: "NAVEGAÇÃO",
        menus: [
            {
                nome: "CADASTRO",
                state: "cadastro",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "CLIENTE",
                        target: "cliente"

                    },
                    {
                        nome: "TESTE",
                        target: "teste"

                    }
                ]
            }
        ]
    },
    {
        separador: "Main Navigation",
        menus: [
            {
                nome: "Pages",
                state: "pages",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "Login Boxed",
                        target: "login-boxed"

                    },
                    {
                        nome: "Register Boxed",
                        target: "register-boxed"

                    },
                    {
                        nome: "Forgot Password Boxed",
                        target: "forgot-password-boxed"

                    }
                ]
            }
        ]
    },
    {
        separador: "Bootstrap Components",
        menus: [
            {
                nome: "Elements",
                state: "elements",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "Standard Buttons",
                        target: "buttons-standard"

                    },
                    {
                        nome: "Dropdowns",
                        target: "dropdowns"

                    },
                    {
                        nome: "Icons",
                        target: "icons"

                    },
                    {
                        nome: "Cards",
                        target: "cards"

                    },
                    {
                        nome: "List Groups",
                        target: "list-group"

                    },
                ]
            },
            {
                nome: "Components",
                state: "components",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "Accordions",
                        target: "accordions"

                    },
                    {
                        nome: "Modals",
                        target: "modals"

                    },
                    {
                        nome: "Progress",
                        target: "progress-bar"

                    },
                    {
                        nome: "Tooltips",
                        target: "tooltips-popovers"

                    },
                    {
                        nome: "Carousel",
                        target: "carousel"

                    },
                    {
                        nome: "Pagination",
                        target: "pagination"

                    },
                ]
            },
            {
                nome: "Form Elements",
                state: "forms",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "Controls",
                        target: "controls"

                    },
                    {
                        nome: "Layouts",
                        target: "layouts"

                    },
                ]
            },
            {
                nome: "Tables",
                state: "tables",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "Bootstrap 5 Tables",
                        target: "bootstrap"

                    },
                ]
            },
        ]
    },
    {
        separador: "ADMINISTRATIVO",
        menus: [
            {
                nome: "Configuração",
                state: "configuracao",
                icon: "vsm-icon pe-7s-config",
                filhos: [
                    {
                        nome: "Parâmetro",
                        target: "parametro"

                    },                  
                ]
            }
        ]
    },
]

@Injectable()
export class MenuItems {
    getAll(): ISeparador[] {
        return MENUITEMS;
    }
}