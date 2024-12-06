import { Injectable } from "@angular/core";

export interface ISeparador {
    separador: string;
    menus: IMainMenu[];
    exibe: boolean;
}

export interface IMainMenu {
    nome: string;
    state: string          
    icon: string;
    exibe: boolean;
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
        exibe: true,
        menus: [
            {
                nome: "CADASTRO",
                exibe: true,
                state: "cadastro",
                icon: "vsm-icon pe-7s-note2",
                filhos: [
                    {
                        nome: "CLIENTE",
                        target: "cliente",
                        acesso: "VISUALIZAR_CLIENTE"

                    },
                    {
                        nome: "TESTE",
                        target: "teste",
                        acesso: "VISUALIZAR_TESTE"

                    }
                ]
            }
        ]
    },
    {
        separador: "Main Navigation",
        exibe: true,
        menus: [
            {
                nome: "Pages",
                exibe: true,
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
        exibe: true,
        menus: [
            {
                nome: "Elements",
                exibe: true,
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
                exibe: true,
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
                exibe: true,
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
                exibe: true,
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
        exibe: true,
        menus: [
            {
                nome: "Configuração",
                exibe: true,
                state: "configuracao",
                icon: "vsm-icon pe-7s-config",
                filhos: [
                    {
                        nome: "Parâmetro",
                        target: "parametro"

                    },
                    {
                        nome: "Perfil",
                        target: "perfil"

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