import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(p) => p.theme.palette.error.main};
  font-size: inherit;
`;

// import React, { ReactElement } from "react";
// import { UseFormMethods } from "react-hook-form";
// import { ErrorMessage as Error } from "@hookform/error-message";
// import styled from "styled-components";

// type Props = {
//   errors: UseFormMethods["errors"];
//   name: string;
// };

// // TODO adds exit animation
// function ErrorMessage({ errors, name }: Props): ReactElement {
//   return (
//     <Error
//       errors={errors}
//       name={name}
//       render={({ message }) => <Message>{message}</Message>}
//     />
//   );
// }

// type MessageProps = {};
// const Message = styled.p<MessageProps>`
//   color: ${(p) => p.theme.palette.error.dark};
//   font-size: inherit;
// `;

// export { ErrorMessage };
