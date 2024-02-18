import { render } from '@testing-library/react';

import Realib from './realib';

describe('Realib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Realib />);
    expect(baseElement).toBeTruthy();
  });
});
