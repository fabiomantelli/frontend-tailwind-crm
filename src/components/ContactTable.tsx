interface ContactProps {
  firstname: string;
  lastname: string;
  zip: string;
  phone_mobile: string;
  mail: string;
}

const ContactTable = ({ contacts }) => {
  const columns = [
    { path: "firstname", label: "Nome" },
    { path: "lastname", label: "Sobrenome" },
    { path: "zip", label: "CEP" },
    { path: "phone_mobile", label: "Celular" },
    { path: "mail", label: "E-Mail" },
  ];

  return (
    <table variant="striped">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.path}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.lastname}>
            {columns.map((column) => (
              <td key={column.path}>{contact[column.path]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
