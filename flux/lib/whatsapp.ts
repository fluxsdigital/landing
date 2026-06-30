export const WHATSAPP_PHONE = "5547974002478";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Flux e gostaria de conversar sobre um projeto.";

export function whatsappUrl(phone = WHATSAPP_PHONE, message = WHATSAPP_DEFAULT_MESSAGE) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${phone}?${params.toString()}`;
}
