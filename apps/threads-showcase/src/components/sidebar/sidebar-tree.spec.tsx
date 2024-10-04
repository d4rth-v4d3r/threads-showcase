import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { SidebarTree } from './sidebar-tree';

describe('components/sidebar/sidebar-tree.spec.tsx', () => {
  it('should show collapsible menus', async () => {
    // Render initial layout
    render(<SidebarTree />);
    expect(screen.getByText('The Science of Biology')).toBeVisible();

    // Show expand the menu
    await userEvent.click(screen.getByText('The Biosphere'));
    expect(screen.getByText('What is Ecology?')).toBeVisible();
  });
});
