<template>
	<div>
		<div id="slogan" class="text-center">
			<h1>NameGator</h1>
			<br />
			<h6 class="text-secundary">Gerador de nomes utilizando vue.js GraphQL e Node</h6>
		</div>
		<div id="main">
			<div class="container">
				<div class="row">
					<div class="col-md">
						<h5>
							Prefixos
							<span class="badge badge-info">{{prefixes.length }}</span>
						</h5>
						<div class="card">
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
										<div class="row">
											<div class="col-md">{{prefix}}</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deletePrefix(prefix)">
													<span class="fa fa-trash"></span>
												</button>
											</div>
										</div>
									</li>
								</ul>
								<br />
								<div class="input-group">
									<input
										class="form-control"
										v-model="prefix"
										v-on:keyup.enter="addPrefix(prefix)"
										type="text"
										placeholder="Digite o prefixo"
									/>
									<div class="input-group-append">
										<button class="btn btn-info" v-on:click="addPrefix(prefix)">
											<span class="fa fa-plus"></span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md">
						<h5>
							Sulfixos
							<span class="badge badge-info">{{sulfixes.length}}</span>
						</h5>
						<div class="card">
							<div class="card-body">
								<ul class="list-group">
									<li class="list-group-item" v-for="sulfix in sulfixes" v-bind:key="sulfix">
										<div class="row">
											<div class="col-md">{{sulfix}}</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deleteSulfix(sulfix)">
													<span class="fa fa-trash"></span>
												</button>
											</div>
										</div>
									</li>
								</ul>
								<br />
								<div class="input-group">
									<input
										class="form-control"
										v-model="sulfix"
										v-on:keyup.enter="addSulfix(sulfix)"
										type="text"
										placeholder="Digite o sulfixo"
									/>
									<div class="input-group-append">
										<button class="btn btn-info" v-on:click="addSulfix(sulfix)">
											<span class="fa fa-plus"></span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<h5>
					Dominios
					<span class="badge badge-info">{{domains.length}}</span>
				</h5>
				<div class="card">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item" v-for="domain in domains" v-bind:key="domain.name">
								<div class="row">
									<div class="col-md">{{domain.name}}</div>
									<div class="col-md text-right">
										<a class="btn btn-info" v-bind:href="domain.checkout" target="_blank">
											<span class="fa fa-shopping-cart"></span>
										</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
	name: "app",
	data: function() {
		return {
			prefix: "",
			sulfix: "",
			prefixes: ["Air", "Jet", "Flight"],
			sulfixes: ["Hub", "Station", "Mart"]
		};
	},
	methods: {
		addPrefix(prefix) {
			this.prefixes.push(prefix);
			this.prefix = "";
		},
		deletePrefix(prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
		},
		addSulfix(sulfix) {
			this.sulfixes.push(sulfix);
			this.sulfix = "";
		},
		deleteSulfix(sulfix) {
			this.sulfixes.splice(this.sulfixes.indexOf(sulfix), 1);
		}
	},
	computed: {
		domains() {
			const domains = [];
			for (const prefix of this.prefixes) {
				for (const sulfix of this.sulfixes) {
					const name = prefix + sulfix;
					const url = name.toLowerCase();
					const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
					domains.push({
						name,
						checkout
					});
				}
			}
			return domains;
		}
	}
};
</script>

<style>
#slogan {
	margin-top: 30px;
	margin-bottom: 30px;
}
#main {
	background-color: #f1f1f1;
	padding-top: 30px;
	padding-bottom: 30px;
}
</style>
