export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  let message = (!email || email.length <= 0) ? "Email can't be empty." :
    (!re.test(email)) ? 'Ooops! We need a valid email address.' :
    '';
  return message;
}
  