export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  category: 'display' | 'form' | 'layout' | 'overlay' | 'pattern' | 'hook';
  storybookId: string;
}

export const componentsMeta: ComponentMeta[] = [
  { name: 'Avatar', slug: 'avatar', description: 'Display user profile images with fallback initials.', category: 'display', storybookId: 'components-avatar' },
  { name: 'Badge', slug: 'badge', description: 'Small status descriptors for UI elements.', category: 'display', storybookId: 'components-badge' },
  { name: 'Calendar', slug: 'calendar', description: 'Date picker calendar component.', category: 'display', storybookId: 'components-calendar' },
  { name: 'Icon', slug: 'icon', description: 'Heroicons-based icon component with size and color variants.', category: 'display', storybookId: 'components-icon' },
  { name: 'Img', slug: 'img', description: 'Image component with Next.js Image optimization.', category: 'display', storybookId: 'components-img' },
  { name: 'ImageCarousel', slug: 'image-carousel', description: 'Swipeable image carousel powered by Embla.', category: 'display', storybookId: 'components-imagecarousel' },
  { name: 'Loader', slug: 'loader', description: 'Loading spinner indicator.', category: 'display', storybookId: 'components-loader' },
  { name: 'Progress', slug: 'progress', description: 'Progress bar for showing completion status.', category: 'display', storybookId: 'components-progress' },
  { name: 'Skeleton', slug: 'skeleton', description: 'Placeholder loading skeleton animations.', category: 'display', storybookId: 'components-skeleton' },
  { name: 'Tooltip', slug: 'tooltip', description: 'Informational popup on hover or focus.', category: 'display', storybookId: 'components-tooltip' },
  { name: 'Typography', slug: 'typography', description: 'Text rendering with semantic heading and body variants.', category: 'display', storybookId: 'components-typography' },
  { name: 'Button', slug: 'button', description: 'Clickable button with multiple variants, sizes, and loading state.', category: 'form', storybookId: 'components-button' },
  { name: 'Checkbox', slug: 'checkbox', description: 'Accessible checkbox built on Radix UI.', category: 'form', storybookId: 'components-checkbox' },
  { name: 'FileUpload', slug: 'file-upload', description: 'Drag-and-drop file upload area.', category: 'form', storybookId: 'components-fileupload' },
  { name: 'IconButton', slug: 'icon-button', description: 'Icon-only button for compact actions.', category: 'form', storybookId: 'components-iconbutton' },
  { name: 'ImageUpload', slug: 'image-upload', description: 'Image-specific upload with preview.', category: 'form', storybookId: 'components-imageupload' },
  { name: 'Input', slug: 'input', description: 'Text input field with icon support and validation states.', category: 'form', storybookId: 'components-input' },
  { name: 'RadioGroup', slug: 'radio-group', description: 'Radio button group for single selection.', category: 'form', storybookId: 'components-radiogroup' },
  { name: 'Select', slug: 'select', description: 'Dropdown select for option selection.', category: 'form', storybookId: 'components-select' },
  { name: 'Switch', slug: 'switch', description: 'Toggle switch for boolean settings.', category: 'form', storybookId: 'components-switch' },
  { name: 'Textarea', slug: 'textarea', description: 'Multi-line text input area.', category: 'form', storybookId: 'components-textarea' },
  { name: 'Accordion', slug: 'accordion', description: 'Collapsible content sections.', category: 'layout', storybookId: 'components-accordion' },
  { name: 'Card', slug: 'card', description: 'Container with border, shadow, and padding.', category: 'layout', storybookId: 'components-card' },
  { name: 'Divider', slug: 'divider', description: 'Horizontal or vertical separator line.', category: 'layout', storybookId: 'components-divider' },
  { name: 'Drawer', slug: 'drawer', description: 'Slide-out panel from the edge of the screen.', category: 'layout', storybookId: 'components-drawer' },
  { name: 'Tabs', slug: 'tabs', description: 'Tabbed content navigation.', category: 'layout', storybookId: 'components-tabs' },
  { name: 'Alert', slug: 'alert', description: 'Inline feedback messages with severity variants.', category: 'overlay', storybookId: 'components-alert' },
  { name: 'Dialog', slug: 'dialog', description: 'Modal dialog overlay for focused interactions.', category: 'overlay', storybookId: 'components-dialog' },
  { name: 'Popover', slug: 'popover', description: 'Floating content anchored to a trigger element.', category: 'overlay', storybookId: 'components-popover' },
  { name: 'Toast', slug: 'toast', description: 'Temporary notification messages.', category: 'overlay', storybookId: 'components-toast' },
  { name: 'ActionMenu', slug: 'action-menu', description: 'Dropdown menu with grouped actions.', category: 'pattern', storybookId: 'patterns-actionmenu' },
  { name: 'ConfirmDialog', slug: 'confirm-dialog', description: 'Confirmation modal with danger/warning variants.', category: 'pattern', storybookId: 'patterns-confirmdialog' },
  { name: 'DataDisplay', slug: 'data-display', description: 'Metric display component.', category: 'pattern', storybookId: 'patterns-datadisplay' },
  { name: 'DataTable', slug: 'data-table', description: 'Sortable table with pagination and empty states.', category: 'pattern', storybookId: 'patterns-datatable' },
  { name: 'EmptyState', slug: 'empty-state', description: 'Empty content placeholder with icon and CTA.', category: 'pattern', storybookId: 'patterns-emptystate' },
  { name: 'FilterBar', slug: 'filter-bar', description: 'Search input with active filter badges.', category: 'pattern', storybookId: 'patterns-filterbar' },
  { name: 'FilterTabButton', slug: 'filter-tab-button', description: 'Tab-style filter buttons.', category: 'pattern', storybookId: 'patterns-filtertabbutton' },
  { name: 'FormField', slug: 'form-field', description: 'Label + input + error + helper text composition.', category: 'pattern', storybookId: 'patterns-formfield' },
  { name: 'ListItem', slug: 'list-item', description: 'Flexible list items with leading/trailing slots.', category: 'pattern', storybookId: 'patterns-listitem' },
  { name: 'PageHeader', slug: 'page-header', description: 'Page title with subtitle, actions, and breadcrumbs.', category: 'pattern', storybookId: 'patterns-pageheader' },
  { name: 'Pagination', slug: 'pagination', description: 'Page navigation controls.', category: 'pattern', storybookId: 'patterns-pagination' },
  { name: 'SectionHeader', slug: 'section-header', description: 'Section title with optional description.', category: 'pattern', storybookId: 'patterns-sectionheader' },
  { name: 'StatCard', slug: 'stat-card', description: 'Metric card with trend indicators.', category: 'pattern', storybookId: 'patterns-statcard' },
];

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return componentsMeta.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: ComponentMeta['category']): ComponentMeta[] {
  return componentsMeta.filter((c) => c.category === category);
}
