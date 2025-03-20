import { toast } from "sonner";

type toastType = 'success' | 'error' | 'warning' | 'info';

function formatCurrency(value: number): string {
  if( value === undefined || value === null ) return '';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function successMessage(msg: string, type: toastType): void {
  toast[type](msg, {
    duration: 1000
  });
}

export {
  formatCurrency,
  successMessage
}