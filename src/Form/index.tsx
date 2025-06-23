import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: var(--light-border-thin);
  border-radius: var(--default-border-radius);
  background-color: var(--white);
`;

export const FormRow = styled.div`
  display: flex;
`;

/**
 * For use when you need multiple inputs
 * on the same row.
 */
export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
`;
