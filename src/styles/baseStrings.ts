const comumStrings = {
  pt: {
    confirm: "confirmar",
    password: "Senha"
  },
  en: {
    confirm: "confirm",
    password: "Password"
  },
};

const baseStrings = {
  pt: {
    input: {
      email: "E-mail",
      password: "Senha",
      confirmPassword: `${comumStrings.pt.confirm} ${comumStrings.pt.password}`,
      name: "Nome",
    },

    view: {
      loginView: {},
      registerView: {},
      auth: {
        homeView: {},
        notificationsView: {},
        settingsView: {},
        settings: {
          cameraSettingsView: {},
          notificationsSettingsView: {},
        },
      },
    },

    button: {
      edit: "Editar",
      save: "Salvar",
      login: "Entrar",
      register: "Cadastrar",
      confirm: "Confirmar",
    },
  },
  en: {
    input: {
      email: "E-mail",
      password: "Password",
      confirmPassword: `${comumStrings.en.confirm} ${comumStrings.en.password}`,
      name: "Name",
    },

    view: {
      loginView: {},
      registerView: {},
      auth: {
        homeView: {},
        notificationsView: {},
        settingsView: {},
        settings: {
          cameraSettingsView: {},
          notificationsSettingsView: {},
        },
      },
    },

    button: {
      edit: "Edit",
      save: "Save",
      login: "Login",
      register: "Register",
      confirm: "Confirm",
    },
  },
};


export default baseStrings;
