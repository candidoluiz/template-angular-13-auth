import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-pills',
    templateUrl: './pills.component.html',
    styleUrls: ['./pills.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => PillsComponent),
        }
    ]
})
export class PillsComponent implements ControlValueAccessor {


    @Input() label: string = '';
    checked: boolean = false;
    disabled: boolean = false;

    // Funções de callback
    onChange: any = () => { };
    onTouched: any = () => { };

    // Escreve o valor no controle
    writeValue(value: boolean): void {
        this.checked = value;
    }

    // Registra a função de mudança
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // Registra a função de toque
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // Define o estado desabilitado
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // Lida com a mudança do valor
    onCheckboxChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.checked = target.checked;
        this.onChange(this.checked);
        this.onTouched();
    }

}
