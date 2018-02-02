{
	'variables': {
		'rm'  : '<!(node -e "require(\'addon-tools-raub\').rm()")',
		'rem' : '<!(node -e "require(\'.\').rem()")',
	},
	'targets': [
		{
			'target_name' : 'remove_extras',
			'type'        : 'none',
			'actions'     : [
				{
					'action_name' : 'Unnecessary binaries removed.',
					'inputs'      : [],
					'outputs'     : ['build'],
					'action'      : ['<(rm)', '-rf', '<@(rem)'],
				}
			],
		}
	]
}
