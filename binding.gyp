{
	'variables': {
		'rem' : '<!(node -e "console.log(require(\'.\').rem)")',
	},
	'targets': [
		{
			'target_name'  : 'remove_extras',
			'type'         : 'none',
			'actions'      : [
				{
					'action_name' : 'Unnecessary binaries removed.',
					'inputs'      : ['<@(rem)'],
					'outputs'     : ['build'],
					'conditions'  : [
						[ 'OS=="linux"', { 'action' : [ 'rm', '-rf', '<@(_inputs)' ] } ],
						[ 'OS=="mac"'  , { 'action' : [ 'rm', '-rf', '<@(_inputs)' ] } ],
						[ 'OS=="win"'  , { 'action' : [ '<(module_root_dir)/_rd', '<@(_inputs)' ] } ],
					],
				}
			],
		},
		
	]
}
