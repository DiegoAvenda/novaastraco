<script>
	import Activity from 'lucide-svelte/icons/activity';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Menu from 'lucide-svelte/icons/menu';
	import Package2 from 'lucide-svelte/icons/package-2';
	import Search from 'lucide-svelte/icons/search';
	import Users from 'lucide-svelte/icons/users';

	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import { enhance } from '$app/forms';

	let { deliveredOrders, pendingOrders, userPicture, username } = $props();
</script>

<div class="flex min-h-screen w-full flex-col">
	<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav
			class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href="##" class="flex items-center gap-2 text-lg font-semibold md:text-base">
				<Package2 class="size-6" />
				<span class="sr-only">Acme Inc</span>
			</a>
			<a href="##" class="text-foreground transition-colors hover:text-foreground"> Dashboard </a>
			<a href="##" class="text-muted-foreground transition-colors hover:text-foreground">
				Orders
			</a>
			<a href="##" class="text-muted-foreground transition-colors hover:text-foreground">
				Products
			</a>
			<a href="##" class="text-muted-foreground transition-colors hover:text-foreground">
				Customers
			</a>
			<a href="##" class="text-muted-foreground transition-colors hover:text-foreground">
				Analytics
			</a>
		</nav>
		<Sheet.Root>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="icon" class="shrink-0 md:hidden">
						<Menu class="size-5" />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<a href="##" class="flex items-center gap-2 text-lg font-semibold">
						<Package2 class="size-6" />
						<span class="sr-only">Acme Inc</span>
					</a>
					<a href="##" class="hover:text-foreground"> Dashboard </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Orders </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Products </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Customers </a>
					<a href="##" class="text-muted-foreground hover:text-foreground"> Analytics </a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<form class="ml-auto flex-1 sm:flex-initial">
				<div class="relative">
					<Search class="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search products..."
						class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
					/>
				</div>
			</form>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="secondary" size="icon" class="rounded-full">
							<CircleUser class="size-5" />
							<span class="sr-only">Toggle user menu</span>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Group>
						<DropdownMenu.GroupHeading>{username}</DropdownMenu.GroupHeading>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Settings</DropdownMenu.Item>
						<DropdownMenu.Item>Support</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<form method="post" use:enhance action="/?/signOut">
								<button>Logout</button>
							</form>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</header>
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
		<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-0"
				data-x-chunk-description="A card showing the total revenue in USD and the percentage difference from last month."
			>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
					<DollarSign class="size-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-xs text-muted-foreground">+20.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-1"
				data-x-chunk-description="A card showing the total subscriptions and the percentage difference from last month."
			>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
					<Users class="size-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+180.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-2"
				data-x-chunk-description="A card showing the total sales and the percentage difference from last month."
			>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Sales</Card.Title>
					<CreditCard class="size-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs text-muted-foreground">+19% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-3"
				data-x-chunk-description="A card showing the total active users and the percentage difference from last hour."
			>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Active Now</Card.Title>
					<Activity class="size-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs text-muted-foreground">+201 since last hour</p>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<Card.Root
				class="xl:col-span-2"
				data-x-chunk-name="dashboard-01-chunk-4"
				data-x-chunk-description="A card showing a table of recent transactions with a link to view all transactions."
			>
				<Card.Header class="flex flex-row items-center">
					<div class="grid gap-2">
						<Card.Title>Pending orders</Card.Title>
						<Card.Description>Recent transactions from your store.</Card.Description>
					</div>
					<Button href="##" size="sm" class="ml-auto gap-1">
						View All
						<ArrowUpRight class="size-4" />
					</Button>
				</Card.Header>
				<Card.Content>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Customer</Table.Head>
								<Table.Head class="xl:table.-column hidden">Type</Table.Head>
								<Table.Head class="xl:table.-column hidden">Status</Table.Head>
								<Table.Head class="xl:table.-column hidden">Date</Table.Head>
								<Table.Head class="text-right">Amount</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each pendingOrders as order}
								<Table.Row>
									<Table.Cell>
										<a href={`/admin/${order._id}`}>
											<div class="font-medium">{order.customerName}</div>
											<div class="hidden text-sm text-muted-foreground md:inline">
												readings: {order.items.length}
											</div>
										</a>
									</Table.Cell>
									<Table.Cell class="xl:table.-column hidden">Sale</Table.Cell>
									<Table.Cell class="xl:table.-column hidden">
										<Badge class="text-xs" variant="outline">Approved</Badge>
									</Table.Cell>
									<Table.Cell class="md:table.-cell xl:table.-column hidden lg:hidden">
										{order.createdAt}
									</Table.Cell>
									<Table.Cell class="text-right">${order.totalPrice}</Table.Cell>
								</Table.Row>
							{/each}
							{#if pendingOrders.length === 0}
								You don't have pending orders
							{/if}
						</Table.Body>
					</Table.Root>
				</Card.Content>
			</Card.Root>
			<Card.Root
				data-x-chunk-name="dashboard-01-chunk-5"
				data-x-chunk-description="A card showing a list of recent sales with customer names and email addresses."
			>
				<Card.Header>
					<Card.Title>Delivered orders</Card.Title>
				</Card.Header>
				<Card.Content class="grid gap-8">
					{#each deliveredOrders as order}
						<a href={`/admin/${order._id}`}>
							<div class="flex items-center gap-4">
								<div class="grid gap-1">
									<p class="text-sm font-medium leading-none">{order.customerName}</p>
									<p class="text-sm text-muted-foreground">readings: {order.items.length}</p>
								</div>
								<div class="ml-auto font-medium">${order.totalPrice}</div>
							</div>
						</a>
					{/each}
				</Card.Content>
			</Card.Root>
		</div>
	</main>
</div>
