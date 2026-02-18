export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const docsNavigation: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/docs' },
      { title: 'Getting Started', href: '/docs/getting-started' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Usage', href: '/docs/usage' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Overview', href: '/docs/components' },
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Calendar', href: '/docs/components/calendar' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Divider', href: '/docs/components/divider' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'FileUpload', href: '/docs/components/file-upload' },
      { title: 'Icon', href: '/docs/components/icon' },
      { title: 'IconButton', href: '/docs/components/icon-button' },
      { title: 'ImageCarousel', href: '/docs/components/image-carousel' },
      { title: 'ImageUpload', href: '/docs/components/image-upload' },
      { title: 'Img', href: '/docs/components/img' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Loader', href: '/docs/components/loader' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'RadioGroup', href: '/docs/components/radio-group' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
      { title: 'Typography', href: '/docs/components/typography' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { title: 'ActionMenu', href: '/docs/components/action-menu' },
      { title: 'ConfirmDialog', href: '/docs/components/confirm-dialog' },
      { title: 'DataDisplay', href: '/docs/components/data-display' },
      { title: 'DataTable', href: '/docs/components/data-table' },
      { title: 'EmptyState', href: '/docs/components/empty-state' },
      { title: 'FilterBar', href: '/docs/components/filter-bar' },
      { title: 'FilterTabButton', href: '/docs/components/filter-tab-button' },
      { title: 'FormField', href: '/docs/components/form-field' },
      { title: 'ListItem', href: '/docs/components/list-item' },
      { title: 'PageHeader', href: '/docs/components/page-header' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'SectionHeader', href: '/docs/components/section-header' },
      { title: 'StatCard', href: '/docs/components/stat-card' },
    ],
  },
  {
    title: 'Hooks',
    items: [
      { title: 'useMediaQuery', href: '/docs/hooks/use-media-query' },
      { title: 'useDisclosure', href: '/docs/hooks/use-disclosure' },
      { title: 'useDebounce', href: '/docs/hooks/use-debounce' },
    ],
  },
];
