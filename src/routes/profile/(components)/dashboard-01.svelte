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

	let { username, pendingOrders, deliveredOrders } = $props();
</script>

<div class="flex min-h-screen w-full flex-col">
	<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
		<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<Card.Root
				class="xl:col-span-2"
				data-x-chunk-name="dashboard-01-chunk-4"
				data-x-chunk-description="A card showing a table of recent transactions with a link to view all transactions."
			>
				<Card.Header class="flex flex-row items-center">
					<div class="grid gap-2">
						<Card.Title>Pending orders</Card.Title>
					</div>
				</Card.Header>
				<Card.Content>
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Readings</Table.Head>
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
										<a href={`/profile/${order._id}`}>
											<div class="font-medium">{order.items.length}</div>
											<div class="hidden text-sm text-muted-foreground md:inline">
												Created at: {order.createdAt}
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
						<a href={`/profile/${order._id}`}>
							<div class="flex items-center gap-4">
								<div class="grid gap-1">
									<p class="text-sm font-medium leading-none">Readings</p>
									<p class="text-sm text-muted-foreground">{order.items.length}</p>
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
